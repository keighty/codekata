/* ./levelup/170425-sum-of-numbers-0-to-N.js
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number following the sequence:

0 1 3 6 10 15 21 28 36 45 55 ....

which is created by

0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

Input:

LastNumber

Output:

series and result

Example:

Input:

> 6
Output:

0+1+2+3+4+5+6 = 21
Input:

> -15
Output:

-15<0
Input:

> 0
Output:

0=0
*/
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return count + "<0"
    if (count === 0) return "0=0"

    var sequence = []
    for (var i = 0; i <= count; i++) {
      sequence.push(i)
    }

    var sum = sequence.reduce(function(acc, num) {
      return acc += num;
    }, 0)
    
    return sequence.join('+') + ' = ' + sum
  };

  return SequenceSum;

})();

// TESTS ********
var assert = require('assert')

describe('SequenceSum', () => {
  it('should output a sequence for an input', () => {
    assert.equal("0+1+2+3+4+5+6 = 21", SequenceSum.showSequence(6))
  })
  it('should output -15<0 for -15', () => {
    assert.equal("-15<0", SequenceSum.showSequence(-15))
  })
  it('should output 0=0 for 0', () => {
    assert.equal("0=0", SequenceSum.showSequence(0))
  })
})
