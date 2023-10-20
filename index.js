const image = document.querySelector('.image');

window.addEventListener('scroll', () => {
    // Calculate blur based on scroll position
    const scrollPosition = window.scrollY;
    const blurAmount = (scrollPosition / 100); // Adjust as needed

    // Apply the blur effect with smoother transition
    image.style.filter = `blur(${blurAmount}px)`;
});

const textOverlay = document.querySelector('.text-overlay');
const imageSection = document.querySelector('.image-section');

// Function to handle scroll events and show the text and logo
function handleScroll() {
    // Once the user scrolls, immediately reveal the text and logo
    textOverlay.style.opacity = 1;
    
    // Remove the scroll event listener to prevent further changes
    window.removeEventListener('scroll', handleScroll);
}

// Listen for the first scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);