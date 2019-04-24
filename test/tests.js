const test = QUnit.test;

function getHeadsorTails(number) {
    if(number < .5){
        return "heads";
    }
}
test('gets heads for less than .5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .49;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const

    const result = getHeadsorTails(number);

    //Assert
    assert.equal(result, expected);
});