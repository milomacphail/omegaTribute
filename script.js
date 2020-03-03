/* Open when someone clicks on the span element */
function toggleNav() {
  var toggleNav = document.getElementById("navbar");
  if  (toggleNav.style.width = "100%") {
      toggleNav.style.width = "0%";
      document.getElementById("landing-text").style.opacity = "1";
  } else {
    document.getElementById("landing-text").style.opacity = "0.3";
    toggleNav.style.width = "100%"
  }
    
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  
  document.getElementById("landing-text").style.opacity = "1";
}
