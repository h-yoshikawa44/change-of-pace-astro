/* eslint-env browser */
import { MENU_TYPE_LIST } from '@/consts';

const body = document.body;
const baseContents = document.getElementById('base-contents');
/**
 * スクロールバーを非表示にすると、その分右にずれるため padding で調整するスタイル
 * body 要素に Tailwind のクラス付与ができなかったので setAttribute で style に付与して使う
 */
const scrollHiddenClass = 'overflow:hidden; padding-right: 17px';

MENU_TYPE_LIST.forEach((type) => {
  const openMenuButton = document.getElementById(`open-${type}-menu-button`);
  const menu = document.getElementById(`${type}-menu`);
  const menuBackDrop = document.getElementById(`${type}-menu-backdrop`);
  const closeMenuButton = document.getElementById(`close-${type}-menu-button`);

  openMenuButton?.addEventListener('click', () => {
    menu?.classList.remove('hidden');
    baseContents?.setAttribute('inert', '');
    body?.setAttribute('style', scrollHiddenClass);
  });

  menuBackDrop?.addEventListener('click', () => {
    menu?.classList.add('hidden');
    baseContents?.removeAttribute('inert');
    body.removeAttribute('style');
  });

  closeMenuButton?.addEventListener('click', () => {
    menu?.classList.add('hidden');
    baseContents?.removeAttribute('inert');
    body.removeAttribute('style');
  });
});
