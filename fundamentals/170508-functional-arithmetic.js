/* ./fundamentals/170508-functional-arithmetic.js
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
no if statements
*/
function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
        return a + b
    case 'subtract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
  }
}

// TESTS ********
var assert = require('assert')
describe('functional-arithmetic', () => {
  it('should return 7', () => {
    var result = arithmetic(5, 2, "add")
    assert.equal(7, result)
  })
  it('should return 3', () => {
    var result = arithmetic(5, 2, "subtract")
    assert.equal(3, result)
  })
  it('should return 10', () => {
    var result = arithmetic(5, 2, "multiply")
    assert.equal(10, result)
  })
  it('should 2.5', () => {
    var result = arithmetic(5, 2, "divide")
    assert.equal(2.5, result)
  })
})
