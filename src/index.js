import getHeadsOrTails from './get-heads-or-tails.js';

const flipButton = document.getElementById('flip-button');
const headsChoice = document.getElementById('heads-choice');
const coinImage = document.getElementById('coin-image');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const messageDisplay = document.getElementById('message');

flipButton.addEventListener('click', () => {
    
    const randomNumber = Math.random();
    const flip = getHeadsOrTails(randomNumber);

// change image order
    
    if(flip === 'heads'){
        coinImage.src = '../assets/heads-image.png';
    } else {
        coinImage.src = '../assets/tails-image.png';
    } 

    console.log(flip);


});