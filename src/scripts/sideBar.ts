/* eslint-env browser */

const selectMenuButton = document.getElementById('select-menu-button');
const selectAnchorButton = document.getElementById('select-anchor-button');
const sideBarMenu = document.getElementById('sidebar-menu');
const sideBarAnchorList = document.getElementById('sidebar-anchor-list');

selectMenuButton?.addEventListener('click', () => {
  sideBarMenu?.classList.remove('hidden');
  sideBarAnchorList?.classList.add('hidden');
});

selectAnchorButton?.addEventListener('click', () => {
  sideBarAnchorList?.classList.remove('hidden');
  sideBarMenu?.classList.add('hidden');
});
