/* global document */
const openMenuButton = document.getElementById("open-menu-button");
const menu = document.getElementById("menu");
const baseContents = document.getElementById("base-contents");
const closeMenuButton = document.getElementById("close-menu-button");

openMenuButton?.addEventListener("click", () => {
  menu?.classList.remove("hidden");
  baseContents?.setAttribute("inert", "");
});

closeMenuButton?.addEventListener("click", () => {
  menu?.classList.add("hidden");
  baseContents?.removeAttribute("inert");
});
