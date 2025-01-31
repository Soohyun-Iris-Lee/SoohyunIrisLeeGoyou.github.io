let handPose;
let video;
let hands = [];
let trajectory = [];
const maxTrajectoryPoints = 500;
const body = document.querySelector('body');
let trailImages = [];
let currentTrailImage;
let trailImageChangeInterval = 50;
let lastTrailChangeTime = 0;

const gestureArray = [
  "gesture1.png",
  "gesture2.png",
  "gesture3.png",
  "gesture4.png",
  "gesture5.png",
  "gesture6.png",
  "gesture7.png",
  "gesture8.png",
  "gesture9.png",
  "gesture10.png",
  "gesture11.png",
  "gesture12.png",
  "gesture13.png",
  "gesture14.png",
  "gesture15.png",
  "gesture16.png",
  "gesture17.png",
  "gesture18.png",
  "gesture19.png",
  "gesture20.png"

 

];
function preload() {
  // Load the handPose model
  handPose = ml5.handPose();

  for (let i = 0; i < gestureArray.length; i++) {
    let img = loadImage(gestureArray[i]); 
    trailImages.push(img); 
  }
}

function setup() {
  let bodyWidth = body.offsetWidth;
  let bodyHeight = bodyWidth * 0.75;
  createCanvas(bodyWidth, bodyHeight);

  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(bodyWidth, bodyHeight);
  video.hide();

  // Set an initial trail image
  currentTrailImage = random(trailImages);

  // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Mirror and draw the webcam video
  push();
  translate(width, 0);
  scale(-1, 1);
  //image(video, 0, 0, width, height);
  pop();

  
  if (millis() - lastTrailChangeTime > trailImageChangeInterval) {
    currentTrailImage = random(trailImages); 
    lastTrailChangeTime = millis();
  }

  // Draw the trajectory with assigned images
  push();
  translate(width, 0);
  scale(-1, 1);
  for (let point of trajectory) {
   
    image(point.image, point.x - 50, point.y - 50, 100, 100);
  }
  pop();


  push();
  translate(width, 0);
  scale(-1, 1);
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let key in hand) {
      const keypoint = hand[key];
    
    }
  }
  pop();
}

function gotHands(results) {
  hands = results;

  if (hands.length > 0) {
    let hand = hands[0]; 
    let indexFingerTip = hand.index_finger_tip; 
    if (indexFingerTip) {
   
      trajectory.push({
        x: indexFingerTip.x,
        y: indexFingerTip.y,
        image: currentTrailImage 
      });

   
      if (trajectory.length > maxTrajectoryPoints) {
        trajectory.shift();
      }
    }
  }
}

