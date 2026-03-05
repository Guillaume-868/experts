import "./bootstrap";
import { initBurgerMenu } from "./menu-burger.js";
import { carousel } from "./carousel.js";

initBurgerMenu();

// **************** Links for active state on click (Menu Burger) **************
const links = document.querySelectorAll(".menu-link");

// Set the active link on page load
links.forEach((link) => {
    // Check if the link's path matches the current page path
    if (link.pathname === window.location.pathname) {
        link.classList.add("active");
    }

    // Add click event listener for navigation
    link.addEventListener("click", () => {
        // Remove "active" class from all links
        links.forEach((link) => link.classList.remove("active"));
        // Add "active" class to the clicked link
        link.classList.add("active");
    });
});

carousel();
