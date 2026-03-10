const form = document.querySelector(".contact-form");
if (!form) throw new Error("Formulaire introuvable !"); /* Console*/

/* REGEX email */
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* Array */
const fields = [
    {
        selector: "#name",
        validate: (element) =>
            element.value.trim() !==
            "" /* trim() : method that removes the spaces before and after the text*/,
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
        message: "Vous devez accepter le RGPD",
    },
];

form.addEventListener("submit", (event) => {
    event.preventDefault(); /* Prevent default form submission */
    resetErrors();

    let allValid = true; /* Assume all fields are valid */

    /* Validate each field */
    fields.forEach((field) => {
        const element = form.querySelector(field.selector);
        if (!field.validate(element)) {
            showError(element, field.message);
            allValid = false;
        }
    });

    /* When the form is submitted */
    if (allValid) {
        const formData = Object.fromEntries(new FormData(form).entries());
        console.log("Formulaire prêt à être envoyé :", formData); /* Console */
        alert(
            "Formulaire validé ! (Simulation d'envoi : Front-End)",
        ); /* Sending simulation */
        form.reset();
    }
});

/* Reset error messages and hide them */
function resetErrors() {
    form.querySelectorAll(".error-message").forEach((element) => {
        element.textContent = "";
        element.classList.remove("visible");
    });
}

/* Display the error message */
function showError(input, message) {
    let errorSpan;

    if (input.type === "checkbox") {
        const consentBlock = input.closest(".consent");
        errorSpan = consentBlock.querySelector(".error-message");
    } else {
        errorSpan = input.nextElementSibling;
    }

    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add("visible");
    }
}
