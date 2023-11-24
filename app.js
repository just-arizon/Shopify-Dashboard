const chevron = document.querySelector("#chevron");
const planOptions = document.querySelector(".plan__body");

chevron.addEventListener("click", () => {
    planOptions.classList.toggle("open");
});

