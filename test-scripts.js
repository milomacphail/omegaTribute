/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navbar").style.width = "100%";
  document.getElementById("landing-text").style.opacity = "0.3";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navbar").style.width = "0%";
  document.getElementById("landing-text").style.opacity = "1";
  
}
