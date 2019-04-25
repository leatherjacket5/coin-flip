import getHeadsOrTails from '../src/get-heads-or-tails.js';

const test = QUnit.test;


test('gets heads for less than .5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .49;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getHeadsOrTails(number);

    //Assert
    assert.equal(result, expected);
});

test('gets heads for more than or equal to .5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .8;
    const expected = 'tails';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getHeadsOrTails(number);

    //Assert
    assert.equal(result, expected);
});

function moneyBank(moneyAmount, moneyBet) {
    const totalWinnings = moneyAmount + moneyBet;
    return totalWinnings;

    const totalLoss = moneyAmount - moneyBet
}

test('adds money', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const moneyAmount = 1000;
    const moneyBet = 10;
    const expected = 1010;

    //Act 
    // Call the function you're testing and set the result to a const

    const result = moneyBank(moneyAmount, moneyBet);

    //Assert
    assert.equal(result, expected);
});

// test('subtracts money', function(assert) {
//     //Arrange
//     // Set up your parameters and expectations
//     const moneyAmount = 1000;
//     const moneyBet = 10;
//     const expected = 990;

//     //Act 
//     // Call the function you're testing and set the result to a const

//     const result = moneyBank(moneyAmount, moneyBet);

//     //Assert
//     assert.equal(result, expected);
// });