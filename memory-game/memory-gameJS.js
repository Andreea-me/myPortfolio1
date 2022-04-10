const card = document.querySelectorAll(".memory-card");
let cards = [...card];

const attemptHolder = document.querySelector(".attemptsHolder");
const foundHolder = document.querySelector(".foundHolder");
const pairsHolder = document.querySelector(".pairsHolder");
const scoreBoard = document.querySelector(".score");

var attempts = 0;
var foundCards = 0;
var pairs = 0;

attemptHolder.textContent = attempts;
foundHolder.textContent = foundCards;
pairsHolder.textContent = pairs;

let hasFlippedCard = false;
let lockCards = false;
let firstCard, secondCard;
let score = 0;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));

  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
    });
  });
}

function flipCard() {
  if (lockCards) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second click
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  attempts++;
  if (firstCard.dataset.image === secondCard.dataset.image) {
    foundCards += 10;
    pairs++;
    disableCards();
    if (pairs == 6) {
      victory();
    }
  } else {
    foundCards -= 2;
    unflipCards();
  }
  attemptHolder.textContent = attempts;
  foundHolder.textContent = foundCards;
  pairsHolder.textContent = pairs;
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockCards] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

function victory() {
  document.getElementById("victory-text").classList.add("visible");
  score = foundCards;
}

document.querySelector(".victory").addEventListener("click", function () {
  checkScore();
  localStorage.setItem("highscores", JSON.stringify(highscores));

  attempts = 0;
  foundCards = 0;
  pairs = 0;

  attemptHolder.textContent = attempts;
  foundHolder.textContent = foundCards;
  pairsHolder.textContent = pairs;

  cards.forEach((card) => card.classList.remove("flip"));
  cards.forEach((card) => card.addEventListener("click", flipCard));

  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
});

cards.forEach((card) => card.addEventListener("click", flipCard));

//modal

const modal1 = document.querySelector("#player");
const openModal1 = document.querySelector(".open-button1");
const closeModal1 = document.querySelector(".close-button1");

openModal1.addEventListener("click", () => {
  modal1.showModal();
});

closeModal1.addEventListener("click", () => {
  modal1.close();
});

//highscores
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
const scoreList = document.querySelector(".scoretable");

function populateTable() {
  scoreList.innerHTML = highscores
    .map((highscore) => buildTableRow(highscore))
    .join("");
}

function buildTableRow(highscore) {
  return `<tr><td>${highscore.name}</td><td>${highscore.score}</tr>`;
}

function checkScore() {
  let worstScore = 0;
  if (highscores.length > 4) {
    worstScore = highscores[highscores.length - 1].score;
  }
  if (score > worstScore) {
    const name = window.prompt(`${score} – Top score! What's your name?`);
    highscores.push({ name, score });
  }
  highscores.sort((a, b) => (a.score > b.score ? -1 : 1));

  if (highscores.length > 5) {
    highscores.pop();
  }
  populateTable();
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

function clearScores() {
  highscores.splice(0, highscores.length);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  populateTable();
}
