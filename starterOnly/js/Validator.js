export default class Validator {
  #formValid = true;

  constructor(fieldContainer, formFields) {
    this.fieldContainer = fieldContainer;
    this.formFields = formFields;
  }

  getFormValid = () => this.#formValid;

  setFormValid = (state) => (this.#formValid = state);

  launchValidation = () => {
    // reset form validation
    this.resetValidation();

    for (const field in this.formFields) {
      switch (this.formFields[field].validationType) {
        case "name":
          if (!this.nameValidation(this.formFields[field].element)) {
            this.invalidInputStyle(this.formFields[field].element);
            this.setFormValid(false);
          }
          break;

        case "email":
          if (!this.emailValidation(this.formFields[field].element)) {
            this.invalidInputStyle(this.formFields[field].element);
            this.setFormValid(false);
          }
          break;

        case "number":
          if (!this.numberValidation(this.formFields[field].element)) {
            this.invalidInputStyle(this.formFields[field].element);
            this.setFormValid(false);
          }
          break;

        case "radio":
          if (!this.radioValidation(this.formFields[field].element)) {
            this.invalidInputStyle(this.formFields[field].element[0]);
            this.setFormValid(false);
          }
          break;

        case "checkbox":
          if (!this.checkboxValidation(this.formFields[field].element)) {
            this.invalidInputStyle(this.formFields[field].element);
            this.setFormValid(false);
          }
          break;

        default:
          break;
      }
    }

    return this.getFormValid();
  };

  // Methods for validation types
  nameValidation = (name) =>
    name.value !== null && name.value.length >= 2 ? true : false;

  emailValidation = (email) =>
    /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/.test(email.value);

  numberValidation = (number) => /^[0-9]+$/.test(number.value);

  radioValidation = (radio) => {
    for (let element of radio) if (element.checked) return true;
  };

  checkboxValidation = (checkbox) => checkbox.checked;

  // Reset errors fields style and set the default value for private property #formValid
  resetValidation = () => {
    this.setFormValid(true);
    Array.from(this.fieldContainer).map(
      (field) => (field.dataset.errorVisible = false)
    );
  };

  // Add css style for invalid input entry
  invalidInputStyle = (input) => {
    input.parentNode.setAttribute("data-error-visible", true);
  };
}
