const bg = ["한글.png", "별.png","감사.png","사랑.png", "바람.png",];
let index = 0;

document.getElementById("nextButton").addEventListener("click", function() {
    index = (index + 1) % bg.length;
    let elem = document.getElementById("hangulImage");
    elem.src = bg[index];
    if(index == 1) {
      elem.classList.add('small')
    } else {
      elem.classList.remove('small')
    }
    clear();
});

let img;
let angle = 0;
let images = [];
let currentImageIndex = 0;

function preload() {
  images = [
    loadImage('hangul01.png'),
    loadImage('hangul02.png'),
    loadImage('hangul03.png'),
    loadImage('hangul04.jpg'),
    loadImage('hangul05.jpg'),
    loadImage('hangul06.jpg'),
  ];
  img = images[currentImageIndex];
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0); 
  cnv.style('z-index', '1'); // Ensures canvas is on top

  images.forEach((image, index) => {
    const button = createButton(`Image ${index + 1}`);
    button.position(10, 10 + index * 30);
    button.style('z-index', '2'); // Ensure buttons stay on top
    button.mousePressed(() => changeImage(index));
  });

  const resetButton = createButton('Reset');
  resetButton.position(10, 10 + images.length * 30 + 20);
  resetButton.style('z-index', '2');
  resetButton.mousePressed(resetCanvas);
}

function changeImage(index) {
  currentImageIndex = index;
  img = images[currentImageIndex];
}

function resetCanvas() {
  clear();
}


function mouseDragged() {
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  imageMode(CENTER);
  image(img, 0, 0, 50, 50); 
  pop();

  angle += 7;
}

document.addEventListener("dragstart", function(event) {
  event.preventDefault();
});


document.getElementById("saveButton").addEventListener("click", saveImage);

function saveImage() {
    let tempCanvas = createGraphics(width, height); // Create an off-screen canvas
    
    // Fill with #fffef5 background
    tempCanvas.background('#fffef5');
    
    // Copy only the drawings from the main canvas
    tempCanvas.image(get(), 0, 0);

    // Save the final image
    tempCanvas.save('my_hangulwriting.png');
}