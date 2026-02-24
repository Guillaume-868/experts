export function initBurgerMenu() {
    // Select the elements of DOM
    const burger = document.querySelector(".burger");
    const close = document.querySelector(".burger-close");
    const nav = document.querySelector(".nav");
    const overlay = document.querySelector(".menu-overlay");

    // If any of the elements are missing, exit the function
    if (!burger || !close || !nav || !overlay) return;

    // Open and close the menu
    const setMenuState = (isOpen) => {
        nav.classList.toggle("show", isOpen);
        document.body.classList.toggle("menu-open", isOpen);

        burger.style.display = isOpen ? "none" : "block";
        close.style.display = isOpen ? "block" : "none";
    };

    // Close the menu by default
    setMenuState(false);

    burger.addEventListener("click", () => setMenuState(true));
    close.addEventListener("click", () => setMenuState(false));
    document.addEventListener("click", (event) => {
        if (
            !nav.contains(event.target) &&
            !burger.contains(event.target) &&
            !close.contains(event.target)
        ) {
            setMenuState(false);
        }
    });

    // Close when clicking overlay
    overlay.addEventListener("click", () => {
        setMenuState(false);
    });
}
