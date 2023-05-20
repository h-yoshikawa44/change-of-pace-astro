// 出典：https://github.com/mottox2/remark-code-titles
// を TS 化したもの
import type { Root, Content } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

function remarkCodeTitles(): Plugin<Root[]> {
  return (tree) => {
    return visit(tree, 'code', (node, index) => {
      const nodeLang = node.lang || '';
      let language = '';
      let title = '';

      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':'));
        title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length);
      }

      if (!title || index === null) {
        return;
      }

      const className = 'remark-code-title';

      const titleNode: Content = {
        type: 'html',
        value: `<div class="${className}">${title}</div>`.trim(),
      };

      tree.children.splice(index, 0, titleNode);
      node.lang = language;
    });
  };
}

export default remarkCodeTitles;
