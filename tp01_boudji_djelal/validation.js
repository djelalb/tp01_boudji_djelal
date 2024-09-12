$(document).ready(function() {
    const form = $("form");
    const passwordInput = $("#password");
    const confirmPasswordInput = $("#confirm_password");
    const emailInput = $("#email");

    const handleFormSubmit = (event) => {
        const isFormValid = validatePasswords();
        const isEmailValid = validateEmail();

        if (!isFormValid || !isEmailValid) {
            event.preventDefault();
        }
    };

    const validatePasswords = () => {
        let isValid = true;
        const password = passwordInput.val();
        const confirmPassword = confirmPasswordInput.val();

        $(".error-message").remove();

        if (password !== confirmPassword) {
            isValid = false;
            showError(confirmPasswordInput, "Les mots de passe ne correspondent pas.");
        }

        if (password.length < 8) {
            isValid = false;
            showError(passwordInput, "Le mot de passe doit comporter au moins 8 caractères.");
        }

        return isValid;
    };

    const validateEmail = () => {
        const email = emailInput.val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = true;

        if (!emailPattern.test(email)) {
            isValid = false;
            showError(emailInput, "Veuillez entrer un email valide.");
        }

        return isValid;
    };

    const showError = (element, message) => {
        element.after(`<div class='error-message text-danger'>${message}</div>`);
    };

    form.on("submit", handleFormSubmit);
});
