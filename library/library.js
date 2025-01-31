document.addEventListener("DOMContentLoaded", function () {
 
  const headingImg = document.querySelector(".heading");

  if (headingImg) {
    headingImg.addEventListener("mouseover", function () {
      headingImg.src = "goyouheading2.png"; 
      headingImg.style.width = "278px";
    });

    headingImg.addEventListener("mouseout", function () {
      headingImg.src = "goyouheading.png"; 
      headingImg.style.width = "458px";
    });
  }

 
  const bells = document.querySelectorAll(".bell01, .bell02, .bell03");

 
  const bellSounds = {
    bell01: new Audio("librarybellaudio.mp3"),
    bell02: new Audio("librarybellaudio2.mp3"),
    bell03: new Audio("librarybellaudio3.mp3"),
  };
  
  bells.forEach((bell) => {
    bell.addEventListener("mouseenter", function () {
      bell.style.animation = "swing 0.6s ease-in-out";
      

      const sound = bellSounds[bell.classList[0]];
      if (sound) {
        sound.currentTime = 0; 
        sound.play();
      }
    });
  
    bell.addEventListener("animationend", function () {
      bell.style.animation = "";
    });
  });
  
});


document.addEventListener("DOMContentLoaded", () => {
  const projectfdescriptionbutton = document.querySelector(".projectfdescriptionbutton"); // Fixed selector
  const imageContainer = document.querySelector("#imageContainer");


  projectfdescriptionbutton.addEventListener("click", () => {
    // Show images
    imageContainer.classList.remove("hidden");

    // Check if remove button already exists
    if (!document.querySelector("#removeButton")) {
      const removeButton = document.createElement("img");
      removeButton.id = "removeButton";
      removeButton.src = "closebuttoncontrast.png"; // Default image
      removeButton.alt = "Close";
      removeButton.style.position = "absolute";
      removeButton.style.top = "20px";
      removeButton.style.right = "20px";
      removeButton.style.width = "40px";
      removeButton.style.cursor = "pointer";
      removeButton.style.transition = "0.4s"; // Smooth transition effect
  
      document.body.appendChild(removeButton);
  
      // Change image on hover
      removeButton.addEventListener("mouseenter", () => {
          removeButton.src = "closebutton.png";
      });
  
      // Revert to the original image when mouse leaves
      removeButton.addEventListener("mouseleave", () => {
          removeButton.src = "closebuttoncontrast.png";
      });
  
      // Remove images and button when clicked
      removeButton.addEventListener("click", () => {
          const imageContainer = document.querySelector("#imageContainer"); // Ensure this exists
          if (imageContainer) {
              imageContainer.classList.add("hidden");
          }
          removeButton.remove();
      });
  }
  
    }
 ) });


