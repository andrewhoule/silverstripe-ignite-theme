function replaceValidationUI(form) {

    // Suppress the default bubbles
    form.addEventListener('invalid', (ev) => {
        ev.preventDefault();
    }, true);

    // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
    // form submissions by default
    form.addEventListener('submit', (ev) => {
        if (!this.checkValidity()) {
            ev.preventDefault();
        }
    });

    // Add a container to hold error messages
    form.insertAdjacentHTML('afterbegin', '<ul class="error-messages"></ul>');

    const submitButton = form.querySelector('button:not([type=button]), input[type=submit]');

    submitButton.addEventListener('click', (ev) => {
        const invalidFields = form.querySelectorAll(':invalid');
        const errorMessages = form.querySelector('.error-messages');

        if (invalidFields) {
            // Add a container to hold error messages
            errorMessages.classList.add('error-messages--active');
        }

        let listHtml = '';
        let label;
        let labelText;

        for (var i = 0; i < invalidFields.length; i++) {
            label = form.querySelector(`label[for="${invalidFields[i].id}"]`);

            if (label) {
                labelText = label.innerHTML;
                listHtml += `<li><strong>${labelText} - </strong>${invalidFields[i].validationMessage}</li>`;
            }
        }

        // Update the list with the new error messages
        errorMessages.innerHTML = listHtml;

        // If there are errors, give focus to the first invalid field and show
        // the error messages container
        if (invalidFields.length > 0) {
            invalidFields[0].focus();
            errorMessages.style.display = 'block';
        }
    });
}

// Replace the validation UI for all forms
var forms = document.querySelectorAll('form');
for (var i = 0; i < forms.length; i++) {
    replaceValidationUI(forms[i]);
}
