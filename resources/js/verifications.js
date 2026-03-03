document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // prevents sending by default

        let isValid = true;

        // Récupération fields
        const name = document.querySelector("#name");
        const firstname = document.querySelector("#firstname");
        const email = document.querySelector("#email");
        const subject = document.querySelector("#subject");
        const message = document.querySelector("#message");
        const rgpd = document.querySelector("#rgpd");

        // Reset erreurs
        document.querySelectorAll(".error-message").forEach((el) => {
            el.textContent = "";
        });

        // Vérifications
        if (name.value.trim() === "") {
            showError(name, "Le nom est requis");
            isValid = false;
        }

        if (firstname.value.trim() === "") {
            showError(firstname, "Le prénom est requis");
            isValid = false;
        }

        if (!emailPattern.test(email.value)) {
            showError(email, "Email invalide");
            isValid = false;
        }

        if (subject.value.trim() === "") {
            showError(subject, "Le sujet est requis");
            isValid = false;
        }

        if (message.value.trim() === "") {
            showError(message, "Le message est requis");
            isValid = false;
        }

        if (!rgpd.checked) {
            showError(rgpd, "Vous devez accepter le RGPD");
            isValid = false;
        }

        if (isValid) {
            form.submit(); // envoi si tout est bon
        }
    });

    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "0.85rem";
    }
});
