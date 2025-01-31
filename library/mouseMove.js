const body = document.querySelector('body');
const slices = document.querySelectorAll('.slice');

// Array of image URLs
const KaleidoscopeArray = [
    'kaleidoscope1.jpeg',
    'kaleidoscope2.jpg',
    'kaleidoscope4.jpg',
    'kaleidoscope5.jpg',
    'kaleidoscope6.jpg',
    'kaleidoscope7.jpg',
    'kaleidoscope9.jpg',
    'kaleidoscope10.jpg'
];

// Function to update background size based on mouse position
function coordinate(event) {
    let x = event.clientX;
    
    const relX = (x / body.offsetWidth) * 100; // Relative horizontal position
    
    // Define the zoom range (e.g., between 50% and 150%)
    const minZoom = 20;
    const maxZoom = 140;
    
    // Clamp the value to stay within the range
    const zoomValue = Math.max(minZoom, Math.min(relX, maxZoom));

    console.log(x, zoomValue); // Log mouse coordinates and zoom level

    slices.forEach((obj) => {
        obj.style.backgroundSize = `${zoomValue}%`;
    });
}

// Function to change the background image randomly on click
function changeImage() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * KaleidoscopeArray.length);

    // Update the background image for all slices
    slices.forEach((obj) => {
        obj.style.backgroundImage = `url(${KaleidoscopeArray[randomIndex]})`;
    });
}

// Add event listeners
body.addEventListener('mousemove', coordinate); // Mousemove to update background size
body.addEventListener('click', changeImage);



