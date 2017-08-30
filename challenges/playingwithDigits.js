/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.

Note: n, p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow (n, p) {
  var digits = n.toString().split('')
  var sum = sumPowersOfDigits(digits, p)
  return (sum % n === 0) ? sum / n : -1
}

function sumPowersOfDigits (arr, power) {
  return arr
          .map(digit => Math.pow(digit, power++))
          .reduce((acc, value) => acc += value, 0)
}

var assert = require('assert')

describe('digPow', () => {
  it('should pass this canary', () => {
    assert.equal(true, true)
  })

  it('should sum the digits to increasing power', () => {
    var testArr = ['1', '2']
    var testPow = 1
    var expectedResult = 5
    assert.equal(expectedResult, sumPowersOfDigits(testArr, testPow))
  })

  it('should sum the digits to increasing power: 8¹ + 9² = 89 = 89', () => {
    var testArr = ['8', '9']
    var testPow = 1
    var expectedResult = 89
    assert.equal(expectedResult, sumPowersOfDigits(testArr, testPow))
  })

  it('should sum the digits to increasing power: 9¹ + 2² equals 5', () => {
    var testArr = ['9', '2']
    var testPow = 1
    var expectedResult = 13
    assert.equal(expectedResult, sumPowersOfDigits(testArr, testPow))
  })

  it('should return 1 since 8¹ + 9² = 89 = 89 * 1', () => {
    assert.equal(1, digPow(89, 1))
  })

  it('should return -1 since there is no k such as 9¹ + 2² equals 92 * k', () => {
    assert.equal(-1, digPow(92, 1))
  })

  it('should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2', () => {
    assert.equal(2, digPow(695, 2))
  })

  it('should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51', () => {
    assert.equal(51, digPow(46288, 3))
  })
})
