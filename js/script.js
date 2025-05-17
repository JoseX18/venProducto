const hamburguesa = document.querySelector(".toggle");
const navMenu = document.querySelector("nav ul");

hamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("verMenu");
});