const menu = document.querySelector(".mobileNavbar i");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("open");
});