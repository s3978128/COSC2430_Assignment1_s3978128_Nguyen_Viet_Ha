/*Header scroll effect*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

/*Carousel*/

//Slide img on mouse drag
const carousel = document.querySelector(".carousel");

const dragging = (e) =>{
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);