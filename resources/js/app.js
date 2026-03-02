import "./bootstrap";
import { initBurgerMenu } from "./menu-burger.js";
import { carousel } from "./carousel.js";

initBurgerMenu();

// **************** Links for active state on click (Menu Burger) **************
const links = document.querySelectorAll(".menu-link");

links.forEach((link) => {
    // if the url corresponds to the current page
    if (link.href === window.location.href) {
        link.classList.add("active");
    }

    // navigation page
    link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

carousel();
