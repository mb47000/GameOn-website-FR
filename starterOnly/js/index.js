import editNav from './nav.js';
import Modal from './modal.js';

// Functions used in onxyz-attribute-style handlers (onclick="editNav()) must be globals, make it a global by assigning to a window property
window.editNav = editNav; 

// initialize modal
Modal.launchModalEvent();

