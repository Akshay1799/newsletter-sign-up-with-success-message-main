const form = document.querySelector('form');
const container = document.querySelector(".container");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const thanksCard = document.querySelector(".card");
const confirmationMessage = document.querySelector('.confirmation-message');
const dismissBtn = document.querySelector('.dismiss-btn');

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return regex.test(email);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim(); 
    
    if (emailValue === "") {
        emailError.textContent = "Email address is required.";
        emailError.style.display = "block";
        return;
    }

    if (!validateEmail(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return;
    }

    emailError.style.display = "none";

    confirmationMessage.innerHTML = `A confirmation email has been sent to <strong> ${emailValue}</strong>. Please check your mail and click the button inside to confirm your subscription.`;

    container.style.display = 'none';
    thanksCard.style.display = 'flex';
})
dismissBtn.addEventListener('click', () => {
    thanksCard.style.display = 'none';
    container.style.display = 'flex'; 
});
