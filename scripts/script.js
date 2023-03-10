let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Bob",
  chips: 195,
};

playerEl.textContent = player.name + " $" + player.chips;

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
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

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
  if (isAlive === true && hasBlackjack === false) {
    let newDrawnCard = getRandomCard();
    sum += newDrawnCard;
    cards.push(newDrawnCard);
    renderGame();
  } else {
    console.log("lmao");
  }
}
