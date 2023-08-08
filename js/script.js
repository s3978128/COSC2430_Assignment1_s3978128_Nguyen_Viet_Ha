/*Header scroll effect*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

/*Hamburger menu :)*/

let menu = document.querySelector("#menu-icon");
let closeMenu = document.querySelector("#close-icon");
let navbar = document.querySelector("header .navbar ul");

menu.onclick = () => {
    menu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navbar.classList.toggle("open");
}

closeMenu.onclick = () => {
    menu.classList.toggle("active");
    closeMenu.classList.toggle("active");
    navbar.classList.toggle("open");
}