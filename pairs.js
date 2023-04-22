function generateRandomEmoji() {
  // Define arrays with the possible options for each feature
  const eyes = [
    "closed.png",
    "laughing.png",
    "long.png",
    "normal.png",
    "rolling.png",
    "winking.png",
  ];
  const mouths = [
    "open.png",
    "sad.png",
    "smiling.png",
    "surprise.png",
    "straight.png",
    "teeth.png",
  ];
  const skins = ["green.png", "red.png", "yellow.png"];

  // Randomly choose an option
  const randomMouth = mouths[Math.floor(Math.random() * mouths.length)];
  const randomEyes = eyes[Math.floor(Math.random() * eyes.length)];
  const randomSkin = skins[Math.floor(Math.random() * skins.length)];

  // Returns as an object
  return {
    eyes: randomEyes,
    mouth: randomMouth,
    skin: randomSkin,
  };
}

function addCards() {
  const uniqueEmojiImages = new Set();
  // adds 5 random emojis
  while (uniqueEmojiImages.size < 5) {
    uniqueEmojiImages.add(generateRandomEmoji());
  }

  const emojiImages = Array.from(uniqueEmojiImages);
  const duplicatedEmojiImages = [...emojiImages, ...emojiImages]; // duplicates so they have matching cards

  shuffle(duplicatedEmojiImages);

  for (let emojiImage of duplicatedEmojiImages) {
    createCard(emojiImage); // creates cards for each emoji
  }
}

function createCard(emojiImage) {
  const randomEmoji = emojiImage;
  const card = document.createElement("div");
  card.classList.add("card");
  // when the card is clicked, it flips the card over to show the user which emoji it is,
  //and checks if it is a match if a previous card has been clicked
  card.addEventListener("click", () => {
    flipCard(card);
    checkForMatch();
  });

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");

  //back of card has emoji image
  back.style.background = `url(emoji-assets/eyes/${randomEmoji.eyes}) center/cover no-repeat,
                            url(emoji-assets/mouths/${randomEmoji.mouth}) center/cover no-repeat,
                            url(emoji-assets/skin/${randomEmoji.skin}) center/cover no-repeat`;

  card.appendChild(front);
  card.appendChild(back);

  cards.push(card);
  gameBoard.appendChild(card);
}

function shuffle(array) {
  //shuffles cards so not next to eachother
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // generates a random number
    [array[i], array[j]] = [array[j], array[i]]; // swaps current number with the random one
  }
}

//declaring global variables
const gameBoard = document.getElementById("game-board");
const startBtn = document.getElementById("start-btn");

let cards = [];
let flippedCards = [];
let startTime = new Date().getTime();
let attempts = 0;
let gameTime;

startBtn.addEventListener("click", startGame);

function startGame() {
  //reset variables
  startTime = new Date().getTime();
  cards = [];
  flippedCards = [];
  startTime = new Date().getTime();
  attempts = 0;
  gameTime = 0;

  gameBoard.innerHTML = "";
  addCards();
  startBtn.classList.remove("d-block");
  startBtn.classList.add("d-none");
}

function flipCard(card) {
  //will not flip more than 2 cards at the same time
  if (flippedCards.length === 2) {
    return;
  }

  //adds "flipped" class to the card
  card.classList.add("flipped");
  flippedCards.push(card);
}

function unflipCards() {
  // removes "flipped" class from the cards
  flippedCards.forEach((card) => {
    card.classList.remove("flipped");
  });
  flippedCards = []; //resets
}

function checkForMatch() {
  attempts += 1;
  if (flippedCards.length === 2) {
    // if there are two cards flipped
    // Gets the image of each card
    const card1Img = flippedCards[0].querySelector(".back");
    const card2Img = flippedCards[1].querySelector(".back");

    //checks if the two cards match
    if (card1Img.style.background === card2Img.style.background) {
      flippedCards.forEach((card) => {
        card.classList.add("matched");
        card.removeEventListener("click", flipCard);
      });
      cards = cards.filter((c) => !c.classList.contains("matched"));
      flippedCards = [];

      // if all cards have been matched, the game ends
      if (cards.length === 0) {
        setTimeout(() => {
          const endTime = new Date().getTime();
          gameTime = (endTime - startTime) / 1000;
          const score = Math.round(1000000 / (gameTime * attempts));
          resetGame(gameTime);
        }, 500);
      }
    } else {
      // if they arent matching then flip them back over
      flippedCards.forEach((card) => {
        setTimeout(() => {
          card.classList.remove("flipped");
          card.classList.add("front");
        }, 1000);
      });
      flippedCards = []; // reset flipped cards
    }
  }
}

function resetGame(gameTime) {
  // Calculates player's score based on time and attempts
  const score = Math.round(1000000 / (gameTime * attempts));

  // Gets the player's username from the cookie
  const username = getCookie("username");

  // Gets the game board and create a wrapper for the buttons
  const gameBoard = document.getElementById("game-board");
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("d-flex", "justify-content-center");

  // Creates a button to play again
  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("btn", "btn-primary", "m-3");
  playAgainBtn.innerText = "Play Again";
  playAgainBtn.addEventListener("click", startGame);

  // Creates a button to submit score to the server
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("btn", "btn-success", "m-3");
  submitBtn.innerText = "Submit";
  submitBtn.addEventListener("click", () => {
    // Sends a POST request to the server to save the player's score
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "save_score.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("POST request sent successfully!");
      }
    };

    // Converts the data to JSON and send the POST request
    var data = JSON.stringify({ username: username, score: score });
    xhr.send(data);

    // Redirects to the leaderboard page after submitting the score
    window.location.href = "leaderboard.php";
  });

  // Creates a label to display the player's score
  const myLabel = document.createElement("label");
  myLabel.className = "pixelfont";
  myLabel.innerText = `Your score is: ${score}`;

  // Adds the label and play again button to the button wrapper
  buttonWrapper.appendChild(myLabel);
  buttonWrapper.appendChild(playAgainBtn);

  // If the player is logged in, adds the submit button to the wrapper
  if (username) {
    buttonWrapper.appendChild(submitBtn);
  }

  // Clears the game board and adds the button wrapper
  gameBoard.innerHTML = "";
  gameBoard.appendChild(buttonWrapper);
}

// Gets the value of a cookie by its name
function getCookie(cookieName) {
  const cookies = document.cookie.split(";"); // Splits cookies into an array
  for (let i = 0; i < cookies.length; i++) {
    // Loop through each cookie and gets rid of spaces
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      // Check if this is the cookie that is needed
      return cookie.substring(`${cookieName}=`.length, cookie.length);
    }
  }
  return null; // Returns null if the cookie wasn't found
}
