/* eslint-env browser */
import { MENU_TYPE_LIST } from '@/consts';

const baseContents = document.getElementById('base-contents');

MENU_TYPE_LIST.forEach((type) => {
  const openMenuButton = document.getElementById(`open-${type}-menu-button`);
  const menu = document.getElementById(`${type}-menu`);
  const menuBackDrop = document.getElementById(`${type}-menu-backdrop`);
  const closeMenuButton = document.getElementById(`close-${type}-menu-button`);

  openMenuButton?.addEventListener('click', () => {
    menu?.classList.remove('hidden');
    baseContents?.setAttribute('inert', '');
  });

  menuBackDrop?.addEventListener('click', () => {
    menu?.classList.add('hidden');
    baseContents?.removeAttribute('inert');
  });

  closeMenuButton?.addEventListener('click', () => {
    menu?.classList.add('hidden');
    baseContents?.removeAttribute('inert');
  });
});
