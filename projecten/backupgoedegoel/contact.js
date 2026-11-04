const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const hasBlankField = [...formData.values()].some((value) => !value.trim());

    if (hasBlankField) {
        formStatus.textContent = "Vul alle velden in voordat je het bericht verstuurt.";
        return;
    }

    contactForm.reset();
    formStatus.textContent = "Je bericht is verstuurd. (Dit is een demo; het bericht wordt niet echt verzonden.)";
});
