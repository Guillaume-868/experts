export function initBurgerMenu() {
    // Select the elements of DOM
    const burger = document.querySelector(".burger");
    const close = document.querySelector(".burger-close");
    const nav = document.querySelector(".nav");

    if (!burger || !close || !nav) return;

    const setMenuState = (isOpen) => {
        nav.classList.toggle("show", isOpen);
        burger.style.display = isOpen ? "none" : "block";
        close.style.display = isOpen ? "block" : "none";
    };

    // Close the menu by default
    setMenuState(false);

    burger.addEventListener("click", () => setMenuState(true));
    close.addEventListener("click", () => setMenuState(false));
    document.addEventListener("click", (e) => {
        if (
            !nav.contains(e.target) &&
            !burger.contains(e.target) &&
            !close.contains(e.target)
        ) {
            setMenuState(false);
        }
    });
}
