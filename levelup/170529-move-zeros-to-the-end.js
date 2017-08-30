/* ./levelup/170529-move-zeros-to-the-end.js
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros (arr) {
  var numOfZeros = 0
  return arr
    .filter(val => {
      if (val === 0) {
        numOfZeros++
        return false
      }
      return true
    })
    .concat(new Array(numOfZeros).fill(0))
}

// TESTS ********
var assert = require('assert')
describe('move-zeros-to-the-end', () => {
  it('should preserve the order of the other elements', () => {
    assert.deepEqual(moveZeros([false,1,0,1,2,0,1,3,"a"]), [false,1,1,2,1,3,"a",0,0])
  })
})
