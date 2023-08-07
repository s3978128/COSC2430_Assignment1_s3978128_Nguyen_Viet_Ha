const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});

function toggleMenu() {

    var menu = document.querySelector('#nav-list');
    menu.style.display = menu.style.display === "block" ? "none" : "block";

}

function resetNavbar() {
    const navbar = document.querySelector('#nav-list');
    navbar.style.display = 'flex';
    navbar.style.flexDirection = 'row';
}

function checkScreenSize() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        // Apply effects for smaller screens
        toggleMenu();
    } else {
        // Apply effects for larger screens
        resetNavbar();
    }
}


// Initial check on page load
checkScreenSize();

// Listen for the resize event and reset effects when the screen size changes
window.addEventListener('resize', checkScreenSize);