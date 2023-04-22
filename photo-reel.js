const photoReels = document.querySelectorAll(".photo-reel"); // Gets all photo reels
const previewEyes = document.querySelector(".preview-eyes");
const previewMouth = document.querySelector(".preview-mouth");
const previewSkin = document.querySelector(".preview-skin");
const avatarImage = document.querySelector(".avatar-image");
const saveBtn = document.querySelector("#save-btn"); // Gets save button element

let selectedValues = {
  // Sets initial selected values for eyes, mouth, and skin
  eyes: `closed`,
  mouth: "open",
  skin: `green`,
};

function updatePreview() {
  // Updates preview images based on selected values
  previewEyes.src = `emoji-assets/eyes/${selectedValues.eyes}.png`;
  previewMouth.src = `emoji-assets/mouths/${selectedValues.mouth}.png`;
  previewSkin.src = `emoji-assets/skin/${selectedValues.skin}.png`;
  avatarImage.src = `avatar.php?eyes=${selectedValues.eyes}&mouth=${selectedValues.mouth}&skin=${selectedValues.skin}`;
}

function saveAvatar() {
  // Saves selected values to cookie and display alert
  document.cookie = `avatar=${JSON.stringify(selectedValues)}; path=/`;
  alert("Avatar saved!");
}

function selectPhoto() {
  // Updates selected value based on clicked photo and update preview
  const selectedValue = this.querySelector("img").getAttribute("data-value");
  const photoReelClassList = this.parentNode.classList;

  if (photoReelClassList.contains("photo-reel-eyes")) {
    selectedValues.eyes = selectedValue;
    photoReels[0].querySelectorAll(".photo-container").forEach((container) => {
      container.classList.remove("selected");
    });
  } else if (photoReelClassList.contains("photo-reel-mouth")) {
    selectedValues.mouth = selectedValue;
    photoReels[1].querySelectorAll(".photo-container").forEach((container) => {
      container.classList.remove("selected");
    });
  } else if (photoReelClassList.contains("photo-reel-skin")) {
    selectedValues.skin = selectedValue;
    photoReels[2].querySelectorAll(".photo-container").forEach((container) => {
      container.classList.remove("selected");
    });
  }

  this.classList.add("selected");
  updatePreview();
}

photoReels.forEach((photoReel) => {
  // Adds click event listener to all photo containers
  const photoContainers = photoReel.querySelectorAll(".photo-container");
  photoContainers.forEach((container) => {
    container.addEventListener("click", selectPhoto);
  });
});

saveBtn.addEventListener("click", saveAvatar); // Adds click event listener to save button
