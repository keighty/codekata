//#./fundamentals/170216-needle-in-a-haystack.js
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle

*/

function findNeedle(arr) {
  for(var i = 0; i<arr.length; i++) {
    if (arr[i] && typeof arr[i] == 'string' && arr[i].includes('needle')) {
      return "found the needle at position " + i
    }
  }
  return "needle not found"
}

/*
TESTS

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

Test.assertEquals(findNeedle(haystack_1), 'found the needle at position 3')
Test.assertEquals(findNeedle(haystack_2), 'found the needle at position 5')
Test.assertEquals(findNeedle(haystack_3), 'found the needle at position 30')
*/
var assert = require('assert')

var testArr = ['needle']
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

describe('findNeedle', () => {
  it('should return a string that says "found the needle"', () => {
    var testString = "found the needle"
    var result = findNeedle(testArr)
    console.log(result)
    assert.equal(testString, result.match(testString))
  })

  it('should return 1 for [needle]', function () {
    var testArr = ['needle']
    var expectedResult = "found the needle at position 0"
    var result = findNeedle(testArr)

    assert.equal(expectedResult, result)
  })

  it('should handle numbers', function () {
    var expectedResult = "found the needle at position 30"
    assert.equal(expectedResult, findNeedle(haystack_3))
  })

  it('should handle undefined', function () {
    var expectedResult = "found the needle at position 3"
    assert.equal(expectedResult, findNeedle(haystack_1))
  })
})
