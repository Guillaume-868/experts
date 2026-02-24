import "./bootstrap";
import { initBurgerMenu } from "./menu-burger.js";
import { carousel } from "./carousel.js";

initBurgerMenu();

// **************** Links for active state on click (Menu Burger) **************
const links = document.querySelectorAll(".menu-link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        // delete 'active' from all links
        links.forEach((link) => link.classList.remove("active"));
        // add 'active' to the clicked link
        link.classList.add("active");
    });
});

carousel();
