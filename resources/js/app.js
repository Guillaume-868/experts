import "./bootstrap";
import { initBurgerMenu } from "./menu-burger.js";

initBurgerMenu();

// **************** Links for active state on click (Menu Burger) **************
const links = document.querySelectorAll(".menu-link");

links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});
