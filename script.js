/* Set the width of the side navigation to 275px */
function openNav() {
  document.getElementById("sideNavBar").style.width = "275px";
  document.getElementById("main").style.marginLeft = "275px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sideNavBar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("open-menu").style.color = '#ffffff';
}

