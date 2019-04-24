import getHeadsOrTails from './get-heads-or-tails.js';

const flipButton = document.getElementById('flip-button');
const headsChoice = document.getElementById('heads-choice');
const coinImage = document.getElementById('coin-image');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const messageDisplay = document.getElementById('message');


// betting 

const moneyMessage = document.getElementById('money-message');
const moneyBet = document.getElementById('money-bet');
const betButton = document.getElementById('bet-button');


let wins = 0;
let losses = 0;

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
    } else {
        losses++;
        lossesDisplay.textContent = 'Losses: ' + losses;
        messageDisplay.textContent = 'You suck!';

    }
    

  
});

betButton.addEventListener('click', () => {
    console.log(moneyBet.value);

});