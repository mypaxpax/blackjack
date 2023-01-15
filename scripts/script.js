let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  console.log(random);

  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

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
  let newDrawnCard = getRandomCard();
  sum += newDrawnCard;
  cards.push(newDrawnCard);
  renderGame();
}
