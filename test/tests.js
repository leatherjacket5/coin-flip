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