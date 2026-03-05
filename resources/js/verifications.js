const form = document.querySelector(".contact-form");
if (!form) throw new Error("Formulaire introuvable !"); /* Console*/

const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; /* REGEX : email*/

const fields = [
    {
        selector: "#name",
        validate: (element) => element.value.trim() !== "",
        message: "Le nom est requis",
    },
    {
        selector: "#firstname",
        validate: (element) => element.value.trim() !== "",
        message: "Le prénom est requis",
    },
    {
        selector: "#email",
        validate: (element) => emailPattern.test(element.value),
        message: "Email invalide",
    },
    {
        selector: "#subject",
        validate: (element) => element.value.trim() !== "",
        message: "Le sujet est requis",
    },
    {
        selector: "#message",
        validate: (element) => element.value.trim() !== "",
        message: "Le message est requis",
    },
    {
        selector: "#rgpd",
        validate: (element) => element.checked,
        message:
            "Vous devez accepter le Règlement Général sur la Protection des Données",
    },
];

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents any real sending

    resetErrors();

    // Validate each field: select the form element, run its validate function, show an error if invalid,
    // and stop at the first invalid field.
    const isValid = fields.forEach((field) => {
        const element = form.querySelector(field.selector);
        if (!field.validate(element)) {
            showError(element, field.message);
            return false;
        }
        return true;
    });

    if (isValid) {
        // Sending simulation
        const formData = Object.fromEntries(new FormData(form).entries());
        console.log("Formulaire prêt à être envoyé :", formData); /* Console */

        alert("Formulaire validé ! (Simulation d'envoi : Front-End)");
        form.reset();
    }
});

function resetErrors() {
    form.querySelectorAll(".error-message").forEach((element) => {
        element.textContent = "";
        element.classList.remove("visible");
    });
}

function showError(input, message) {
    let errorSpan;

    // Special case: RGPD checkbox has a different HTML structure
    if (input.type === "checkbox") {
        const consentBlock = input.closest(".consent");
        // console.log(consentBlock);
        errorSpan = consentBlock.querySelector(".error-message");
    }
    // Standard fields: error message is the next sibling element
    else {
        errorSpan = input.nextElementSibling;
    }

    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add("visible");
    }
}
