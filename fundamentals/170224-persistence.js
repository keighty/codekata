/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
  var counter = 0
  var digitArr = getDigits(num)
  while (digitArr.length > 1) {
    counter++
    digitArr = getDigits(reduceDigits(digitArr))
  }
  return counter

  function getDigits (num) { return num.toString().split('') }
  function reduceDigits (arr) { return arr.reduce((acc, digit) => acc *= digit, 1) }
}


/*
TESTS
*/
var assert = require('assert')

describe('persistence', () => {
  it('should return 3 for persistence(39)', () => { assert.equal(3, persistence(39))})
  it('should return 4 for persistence(999)', () => { assert.equal(4, persistence(999))})
  it('should return 0 for persistence(4)', () => { assert.equal(0, persistence(4))})
})
