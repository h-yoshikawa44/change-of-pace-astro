/* eslint-env browser */

const copyCode = async (codePre: HTMLPreElement): Promise<void> => {
  const code = codePre.querySelector('code');
  const codeText = code?.innerText;
  if (!codeText) return;

  await navigator.clipboard.writeText(codeText);
};

const resetCopyButtonText = (ele: HTMLButtonElement) => {
  setTimeout(() => {
    ele.innerText = 'Copy';
  }, 3000);
};

const onCopy = async (ev: MouseEvent, codePre: HTMLPreElement) => {
  if (!(ev.target instanceof HTMLButtonElement)) return;

  try {
    await copyCode(codePre);
    ev.target.innerText = 'Copied!';
  } catch (err) {
    ev.target.innerText = 'Failed...';
  }
  resetCopyButtonText(ev.target);
};

const createCopyButton = (
  code: HTMLPreElement,
  codeTitleHeight?: number,
): HTMLButtonElement => {
  const button = document.createElement('button');
  button.className = `copy-code-button`;
  // Tailwind の動的クラスだと、うまくスタイルが当たらないため、style で付与する
  button.setAttribute(
    'style',
    `top: ${codeTitleHeight ? codeTitleHeight + 1 : 1}px`,
  );
  button.type = 'button';
  button.innerText = 'Copy';
  button.addEventListener('click', (ev) => onCopy(ev, code));

  return button;
};

const codeContainerCollection = document.querySelectorAll(
  'div.remark-code-container',
);
codeContainerCollection.forEach((codeContainer: Element) => {
  const childrenList = Array.from(codeContainer.children);

  // コピーボタンの top がコードブロックタイトル要素の高さに依存するので、高さを取得
  const codeTitle = childrenList.find(
    (children) => children.classList.value === 'remark-code-title',
  );
  const codeTitleHeight = codeTitle?.clientHeight;

  // 子の先頭にコードブロックタイトル要素がつく場合があるので、find で pre 要素を探す
  const codePre = childrenList.find(
    (children) => children instanceof HTMLPreElement,
  );
  if (codePre instanceof HTMLPreElement) {
    codeContainer.appendChild(createCopyButton(codePre, codeTitleHeight));
  }
});
