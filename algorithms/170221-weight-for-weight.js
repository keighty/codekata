/* ./algorithms/170221-weight-for-weight.js
Description:

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.
*/

function addDigits(num) {
  return num.toString()
            .split('')
            .reduce(function (acc, digit) { return acc + +digit }, 0)
}

function orderWeight(str) {
  return str.split(' ').sort(function (a, b) {
    var tempA = addDigits(a)
    var tempB = addDigits(b)

    if (tempA === tempB) {
      return a.toString() < b.toString() ? -1 : 1
    }

    return tempA < tempB ? -1 : 1
  }).join(' ')
}


// TESTS ********
var assert = require('assert')

var testArr = "56 65 74 100 99 68 86 180 90"
var expected = "100 180 90 56 65 74 68 86 99"

describe('order by weight', () => {
  it('should add the digits together', () => {
    assert.equal(10, addDigits(55))
  })

  it('should find that 100 < 99', () => {
    assert.deepEqual("100 99", orderWeight("99 100"))
  })

  it('should find that 180 comes before 90', () => {
    assert.deepEqual("180 90", orderWeight("90 180"))
  })

  it('should sort the test array', () => {
    assert.deepEqual(expected, orderWeight(testArr))
  })
})
