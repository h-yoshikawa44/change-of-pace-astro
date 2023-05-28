/* eslint-env browser */

const selectNavButton = document.getElementById('select-nav-button');
const selectAnchorButton = document.getElementById('select-anchor-button');
const sideBarNav = document.getElementById('sidebar-nav');
const sideBarAnchorList = document.getElementById('sidebar-anchor-list');

selectNavButton?.addEventListener('click', () => {
  sideBarNav?.classList.remove('hidden');
  selectNavButton?.classList.add('custom-after-border-b');
  sideBarAnchorList?.classList.add('hidden');
  selectAnchorButton?.classList.remove('custom-after-border-b');
});

selectAnchorButton?.addEventListener('click', () => {
  sideBarAnchorList?.classList.remove('hidden');
  selectAnchorButton?.classList.add('custom-after-border-b');
  sideBarNav?.classList.add('hidden');
  selectNavButton?.classList.remove('custom-after-border-b');
});
