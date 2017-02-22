//#./fundamentals/170221-summation.js
/*
Summation

Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// recursive function
function summation(number) {
  if (number <= 1) {
    return 1
  } else {
    return number + summation(number - 1)
  }
}


/*
TESTS
*/
var assert = require('assert')
describe('summation', () => {
  it('should sum all the numbers between 1 and 5 recursively', () => {
    assert.equal(15, summation(5))
  })

  it('should summ all the numbers between 1 and 8', () => {
    assert.equal(36, summation(8))
  })

  it('should handle 0', () => {
    assert.equal(1, summation(0))
  })

  it('should handle -1', () => {
    assert.equal(1, summation(-1))
  })
})
