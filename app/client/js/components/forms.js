const WrapFields = () => {
  // Get the elements
  const forms = document.querySelectorAll("form");

  // Add the inner wrap to fieldsets
  if (forms) {
    forms.forEach(function (form) {
      const fieldset = form.querySelector("fieldset");
      if (fieldset) {
        fieldset.innerHTML = `<div class="fields">${fieldset.innerHTML}</div>`;
      }
    });
  }
};

export { WrapFields };
