var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when you pass in 5', () => {
      //setup
      const inputNumber = 5
      const expectedResult = 120

      //exercise
      const actual = Calculate.factorial(inputNumber);

      //verfiy
      assert.equal(actual, expectedResult);
    });

    it('returns 6 when you pass in 3', () => {
      //setup
      const inputNumber = 3
      const expectedResult = 6

      //exercise
      const actual = Calculate.factorial(inputNumber);

      //verify
      assert.equal(actual, expectedResult);
    });

    it('returns 1 when you pass in 0', () => {
      //setup
      const inputNumber = 0;
      const expectedResult = 1;

      //exercise
      const actual = Calculate.factorial(inputNumber);
      
      //verify
      assert.equal(actual, expectedResult);
    });
  });
});