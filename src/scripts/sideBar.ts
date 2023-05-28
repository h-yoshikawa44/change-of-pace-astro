/* eslint-env browser */

const selectMenuButton = document.getElementById('select-menu-button');
const selectAnchorButton = document.getElementById('select-anchor-button');
const sideBarMenu = document.getElementById('sidebar-menu');
const sideBarAnchorList = document.getElementById('sidebar-anchor-list');

selectMenuButton?.addEventListener('click', () => {
  sideBarMenu?.classList.remove('hidden');
  selectMenuButton?.classList.add('custom-after-border-b');
  sideBarAnchorList?.classList.add('hidden');
  selectAnchorButton?.classList.remove('custom-after-border-b');
});

selectAnchorButton?.addEventListener('click', () => {
  sideBarAnchorList?.classList.remove('hidden');
  selectAnchorButton?.classList.add('custom-after-border-b');
  sideBarMenu?.classList.add('hidden');
  selectMenuButton?.classList.remove('custom-after-border-b');
});
