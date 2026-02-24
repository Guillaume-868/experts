export function carousel() {
    document.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".carousel-track");
        const slides = Array.from(track.children);
        const nextButton = document.querySelector(".carousel-next");
        const prevButton = document.querySelector(".carousel-prev");
        const dots = Array.from(
            document.querySelectorAll(".carousel-dots .dot"),
        );

        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update dots
            dots.forEach((dot, i) =>
                dot.classList.toggle("active", i === currentIndex),
            );
        }

        // Navigation boutons
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Navigation pagination
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentIndex = i;
                updateCarousel();
            });
        });

        // Optionnel: autoplay toutes les 5 secondes
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);
    });
}
