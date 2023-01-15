let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = 2;
let secondCard = 9;
let cards = [firstCard, secondCard];
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Another card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackjack = true;
  } else {
    message = "Loser!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let newDrawnCard = 2;
  sum += newDrawnCard;
  cards.push(newDrawnCard);
  renderGame();
}
