// FOR MOBILE NAVBAR

let MenuBtn = document.getElementById("Hamburg-menu");

let NavigLinks = document.getElementById("navlinks");


//This is to open and close the mobile navigation bar on medium - smaller screens.

function Open() {
  var y = document.getElementById("navlinks");

  //strict equality (===) operator

  if (y.style.display === "flex") { 
    y.style.display = "none";
  } else {
    y.style.display = "flex";
  }
}
