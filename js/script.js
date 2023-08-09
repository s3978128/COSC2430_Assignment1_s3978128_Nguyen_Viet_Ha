/*Header scroll effect*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

/*Scroll to top button*/
let topButton = document.querySelector("#top-btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.opacity = "0.8";
  } else {
    topButton.style.opacity = "0";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  topButton.style.opacity = 0;
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
