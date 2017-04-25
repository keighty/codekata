/* ./fundamentals/170225-sum-of-pairs.js
Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

// BRUTE FORCE
// var sum_pairs=function(ints, s){
//   indices = []
//
//   for (var i = 0; i<ints.length; i++) {
//     for (var j = i+1; j<ints.length; j++) {
//       if (ints[i] + ints[j] === s) {
//         indices.push([i, j])
//       }
//     }
//     if (i === Math.floor(ints.length/2) && indices.length > 2) {
//       return findMinPair()
//     }
//   }
//
//   if (indices.length === 0) return undefined
//
//   return findMinPair()
//
//   function findMinPair() {
//     var minDex = ints.length - 1
//     var maxDex = ints.length - 1
//     for (var k = 0; k<indices.length; k++) {
//       var testPair = indices[k]
//       if (testPair[1] <= maxDex) {
//         maxDex = testPair[1]
//         minDex = testPair[0]
//       }
//     }
//     return [ints[minDex], ints[maxDex]]
//   }
// }

var sum_pairs = function(ints, s){
  var minIndex = ints.length
  var maxIndex = ints.length

  // find first pair, discard the remaining in the array
  // find the next pair, discard the remaining in the array
  for (var i = 0; i < maxIndex; i++) {
    for (var j = i + 1; j < maxIndex; j++) {
      var testValA = ints[i]
      var testValB = ints[j]
      if (testValA + testValB === s) {
        minIndex = i
        maxIndex = j
      }
    }
  }

  if (minIndex === maxIndex) return undefined
  return [ints[minIndex], ints[maxIndex]]

}

// TESTS ********
var assert = require('assert')

describe('sum_pairs', () => {
  it('should pass this canary', () => {
    assert.equal(true, true)
  })
  it('should return [3,7] for [11,3,7,5], 10', () => {
    assert.deepEqual([3, 7], sum_pairs([11, 3, 7, 5], 10))
  })
  it('should return [3,7] for [10,5,2,3,7,5],10', () => {
    assert.deepEqual([3, 7], sum_pairs([10, 5, 2, 3, 7, 5], 10))
  })
  it('should return undefined for [0,0,-2,3],2', () => {
    assert.deepEqual(undefined, sum_pairs([0, 0, -2, 3], 2))
  })
  it('should return [4,2] for [4,3,2,3,4],6', () => {
    assert.deepEqual([4, 2], sum_pairs([4, 3, 2, 3, 4], 6))
  })

  it.only('Subtraction: [5,9,13,-3] should return [13, -3] for sum = 10', () => {
    assert.deepEqual([13, -3], sum_pairs([5,9,13,-3], 10))
  })

  it('should handle very large inputs', () => {
    var testArr = createTestArray(1000000)
    var startTime = Date.now()
    sum_pairs(testArr, 10)
    var endTime = Date.now()
    assert.equal(endTime - startTime < 1000, true)
  })
})

function createTestArray(length) {
  return Array.apply(null, Array(length)).map(function(item, index){
    return Math.floor(Math.random() * 19);
  })
}
