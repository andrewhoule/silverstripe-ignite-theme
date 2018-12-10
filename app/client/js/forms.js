
// Get the elements
const forms = document.querySelectorAll('form');

// Add the inner wrap to fieldsets
if (forms) {
  for (let i = 0; i < forms.length; i++) {
    const fieldset = forms[i].querySelector('fieldset');
    if (fieldset) {
      fieldset.innerHTML = `<div class="fields">${fieldset.innerHTML}</div>`;
    }
  }
}
