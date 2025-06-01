
// ***FOR main BRANCH***


// FOR MOBILE NAVBAR

let contactHovr = document.getElementById("contact-flt-btn");

let MenuBtn = document.getElementById("Hamburg-menu");

function Open() {
  let NavigLinks = document.getElementById("navlinks");

  contactHovr.style.display = "none";

  if (NavigLinks.style.display == "flex") {
    NavigLinks.style.display = "none";
    contactHovr.style.display = "block";
  } else {
    NavigLinks.style.display = "flex";
    contactHovr.style.display = "none";
  }
}

// FOR CONTACT FORM(email.js)

let PopupMsg = document.getElementById("msgpopup");

let Successtxt = document.getElementById("Sucesstxt");

let Errortxt = document.getElementById("Errtxt");

function Sendmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    name: document.querySelector("#emailadr").value,
     
  };

  PopupMsg.style.display = "block";

  emailjs.send("service_eojdgfk", "template_xoc6n7p", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      Successtxt.innerHTML = "Your Email was sent!"; // Sucess Message
      Errortxt.style.display = "none";
    },
    (error) => {
      console.log("FAILED...", error);
      Errortxt.innerHTML = "Sorry, Please try again or complete the form."; // Error Message
      Successtxt.style.display = "none";
    }
  );
}
