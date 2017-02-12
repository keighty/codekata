// ./strings/170212-sort-by-regex.js

// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

function sortByRegex(str) {
  return str.split(' ')
            .reduce(function (acc, seg) {
                acc[findIndex(seg)] = seg
                return acc
              }, [])
            .slice(1)
            .join(' ')
}

function findIndex(str) {
  return str.match(/\d/)
}

/*
TESTS
*/
var assert = require('assert');
describe('sortByRegex', function() {
  it('should pass this canary', function() {
    assert.equal(true, true)
  })

  it('should return a sorted array of strings', function () {
    var testInput = "is2 Thi1s T4est 3a"
    var expectedResult = "Thi1s is2 3a T4est"
    assert.equal(expectedResult, sortByRegex(testInput))
  })

  describe('findIndex', () => {
    it('should return the number value embedded in a string', function () {
      var testString = "is2"
      var index = findIndex(testString)
      assert.equal(2, index)
    })
  })
})
