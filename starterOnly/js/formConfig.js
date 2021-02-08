const formFields = {
  firstName: {
    element: document.getElementById("first"),
    validationType: "name",
  },
  lastName: {
    element: document.getElementById("last"),
    validationType: "name",
  },
  email: {
    element: document.getElementById("email"),
    validationType: "email",
  },
  birthdate: {
    element: document.getElementById("birthdate"),
    validationType: "date",
  },
  quantity: {
    element: document.getElementById("quantity"),
    validationType: "number",
  },
  location: {
    element: document.querySelectorAll('input[name="location"]'),
    validationType: "radio",
  },
  checkbox: {
    element: document.getElementById("checkbox1"),
    validationType: "checkbox",
  },
};

const fieldContainer = document.querySelectorAll(".formData");

export { formFields, fieldContainer};
