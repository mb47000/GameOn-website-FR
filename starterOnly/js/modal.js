export default class Modal {
  
  // DOM Elements
  static dom = {
    modalbg: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    formData: document.querySelectorAll(".formData"),
  };

  // launch modal event
  static launchModalEvent = () => {
    this.dom.modalBtn.forEach((btn) =>
      btn.addEventListener("click", this.launchModal)
    );
  };

  // launch modal form
  static launchModal = () => (this.dom.modalbg.style.display = "block");
}
