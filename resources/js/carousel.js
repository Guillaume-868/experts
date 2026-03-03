export function carousel() {
    // Wait for the entire DOM to be loaded before starting the carousel
    document.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".carousel-track");
        if (!track)
            return; /*prevents the error if there isn't carousel in the page*/
        const slides = Array.from(track.children);
        const nextButton = document.querySelector(".carousel-next");
        const prevButton = document.querySelector(".carousel-prev");
        const dots = Array.from(
            document.querySelectorAll(".carousel-dots .dot"),
        );

        let index = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) =>
                dot.classList.toggle("active", i === index),
            );
        }

        // Button navigation
        nextButton.addEventListener("click", () => {
            index = (index + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener("click", () => {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Dot navigation
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                index = i;
                updateCarousel();
            });
        });

        // Autoplay every 5 seconds
        setInterval(() => {
            index = (index + 1) % slides.length;
            updateCarousel();
        }, 5000);

        // =======================
        // Swipe for mobile
        // =======================
        let startX = 0;
        let endX = 0;
        const threshold = 50; // Minimum px to count as swipe

        track.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        track.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
        });

        track.addEventListener("touchend", () => {
            const diff = startX - endX;
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    // Swipe left → next slide
                    index = (index + 1) % slides.length;
                } else {
                    // Swipe right → previous slide
                    index = (index - 1 + slides.length) % slides.length;
                }
                updateCarousel();
            }
            // Reset values
            startX = 0;
            endX = 0;
        });
    });
}
