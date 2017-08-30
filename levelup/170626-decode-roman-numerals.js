/* ./levelup/170626-decode-roman-numerals.js
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 
1990 is rendered "MCMXC" (
  1000 = M, 
  900 = CM, 
  90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
  Writing numerals that decrease from left to right represents addition of the numbers. For example, LX represents 50 + 10 = 60 and XVI represents 10 + 5 + 1 = 16.

  https://www.math.nmsu.edu/~pmorandi/math111f01/RomanNumerals.html
  https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

  NOT FINISHED (TODO)
*/

var numerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function solution(roman){
  // 1 split the string
  // 2 check the digit ahead
  // if the digit ahead is higher than the current digit
    // subtract the first from the second
  // if the digit ahead is the same as the current digit
    // look ahead one more digit
      // if it is the same, look ahead one more digit
    // apply the same rules as above
  // if the current digit is higher than the look ahead
    // add it and move on

  var arr = roman.split('')
  var acc = 0
  for (var i = 0; i < arr.length; i++) {
    var pointer1 = numerals[arr[i]]
    var pointer2 = numerals[arr[i+1]]

    if (pointer1 > pointer2 || !pointer2) {
      acc += pointer1
      continue
    }

    if (pointer1 < pointer2 || !pointer2) {
      acc += pointer2 - pointer1
      i++
      continue
    }

    if (pointer1 === pointer2) {
      var pointer3 = numerals[arr[i+2]]
      var pointer4 = numerals[arr[i+3]]
      var temp = 0

      switch (true) {
        case (pointer2 === pointer3):
          if (pointer3 > pointer4 && !pointer4) {
            acc += pointer1 + pointer2 + pointer3
            i += 2
            continue
          }
      }
    }

  }

  return acc


  // return roman.split('').reduce(function (acc, digit) {
  //   return (acc += numerals[digit])
  // }, 0)
}

// TESTS ********
var assert = require('assert')
describe('decode-roman-numerals', () => {
  it('should decipher roman numerals', () => { assert.equal(solution('VI'), 6) })
  it('should decipher roman numerals', () => { assert.equal(solution('V'), 5) })
  it('should decipher roman numerals', () => { assert.equal(solution('IV'), 4) })
  xit('should decipher roman numerals', () => { assert.equal(solution('XXI'), 21) })
  xit('should decipher roman numerals', () => { assert.equal(solution('VIII'), 8) })
})
