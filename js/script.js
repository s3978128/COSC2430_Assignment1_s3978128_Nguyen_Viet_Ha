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

/*Slider for book page*/

function clickme(image) {
    var show = document.getElementById("showcase");
    show.src = image.src;
}

/*Required checkbox for contact form*/

function validateForm() {
    var checkbox1 = document.getElementById('check-1');
    var checkbox2 = document.getElementById('check-2');
    
    if (checkbox1.checked || checkbox2.checked) {
        return true;
    } 
    else {
        alert("Please check at least one checkbox.");
        return false;
    }
}
