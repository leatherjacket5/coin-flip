import getHeadsOrTails from './get-heads-or-tails.js';

const flipButton = document.getElementById('flip-button');
const headsChoice = document.getElementById('heads-choice');
const coinImage = document.getElementById('coin-image');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const messageDisplay = document.getElementById('message');


// betting 

const moneyDisplay = document.getElementById('money-display');
const moneyBet = document.getElementById('money-bet');



let wins = 0;
let losses = 0;

let moneyAmount = 1000;


flipButton.addEventListener('click', () => {

    const randomNumber = Math.random();
    const flip = getHeadsOrTails(randomNumber);

// change image order
    
    if(flip === 'heads'){
        coinImage.src = '../assets/heads-image.png';
    } else {
        coinImage.src = '../assets/tails-image.png';
    } 

    let guess = '';
    if(headsChoice.checked) {
        guess = 'heads';
    } else {
        guess = 'tails';
    }

    
    
    if(flip === guess) {
        wins++;
        winsDisplay.textContent = 'Wins: ' + wins;
        messageDisplay.textContent = 'You won!';
        moneyAmount += moneyBet.value;
        moneyDisplay.textContent = 'You have ' + moneyAmount;
    } else {
        losses++;
        lossesDisplay.textContent = 'Losses: ' + losses;
        messageDisplay.textContent = 'You suck!';
        moneyAmount -= moneyBet.value;
        moneyDisplay.textContent = 'You have ' + moneyAmount;

    }

    console.log(moneyBet.value);
    
    
  
});

