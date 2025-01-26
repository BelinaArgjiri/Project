const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

// Move to the next slide
function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

// Next button event
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0); // Loop back to the first slide
    }
});

// Previous button event
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(slides.length - 1); // Loop back to the last slide
    }
});

// Initialize: Arrange slides in a row
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function updateCarousel() {
    const screenWidth = window.innerWidth;
    const slideWidth = slides[0].getBoundingClientRect().width;

    if (screenWidth < 768) {
        // Show 1 image on mobile
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    } else if (screenWidth < 1024) {
        // Show 2 images on tablets
        track.style.transform = `translateX(-${currentIndex * slideWidth * 0.5}px)`;
    } else {
        // Default for desktop
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
}

// Listen for window resize
window.addEventListener('resize', updateCarousel);

// Initialize carousel layout
updateCarousel();