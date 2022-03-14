const card = document.querySelectorAll(".memory-card");
let cards = [...card];

const attemptHolder = document.querySelector(".attemptsHolder");
const foundHolder = document.querySelector(".foundHolder");
const pairsHolder = document.querySelector(".pairsHolder");

var attempts = 0;
var foundCards = 0;
var pairs = 0;

let hasFlippedCard = false;
let lockCards = false;
let firstCard, secondCard;

function initializeContent() {
  attemptHolder.textContent = attempts;
  foundHolder.textContent = foundCards;
  pairsHolder.textContent = pairs;
}

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
  debugger;
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
    victory();
  } else {
    foundCards -= 2;
    unflipCards();
  }
  initializeContent();
}

function disableCards() {
  debugger;
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
  if (pairs == 6) {
    document.getElementById("victory-text").classList.add("visible");
  }
}

document.querySelector(".victory").addEventListener("click", function () {
  window.location.reload();
  ready();
});

cards.forEach((card) => card.addEventListener("click", flipCard));
