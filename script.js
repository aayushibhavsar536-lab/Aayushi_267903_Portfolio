alert("Welcome to My Portfolio, Aayushi!");
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}
// Contact Form Validation
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.querySelectorAll("input, textarea").forEach(field => {
        if (field.type !== "submit" && field.type !== "button") {
            field.required = true;
        }
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        if (contactForm.checkValidity()) {
            alert("Thank you! Your message is ready.");
            contactForm.reset();
        } else {
            contactForm.reportValidity();
        }
    });
}
