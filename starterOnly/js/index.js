import editNav from './nav.js';

// Functions used in onxyz-attribute-style handlers (onclick="editNav()) must be globals, make it a global by assigning to a window property
window.editNav = editNav; 

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


