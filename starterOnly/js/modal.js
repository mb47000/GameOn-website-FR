export default class Modal {
  // DOM Elements
  static dom = {
    modalbg: document.querySelector(".bground"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    closeBtn: document.querySelector(".close"),
    formData: document.querySelectorAll(".formData"),
  };

  // launch modal event
  static launchModalEvent = () => {
    this.dom.modalBtn.forEach((btn) =>
      btn.addEventListener("click", this.launchModal)
    );

    this.dom.closeBtn.addEventListener("click", this.closeModal);
  };

  // launch modal form
  static launchModal = () => (this.dom.modalbg.style.display = "block");

  // Close modal
  static closeModal = () => (this.dom.modalbg.style.display = "none");
}
