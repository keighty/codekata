/* ./fundamentals/170505-string-diamonds.js
This kata is to practice simple string output.

###Task:

You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).

Please see provided test case(s) for examples.

Python Note

Since print is a reserved word in Python, Python students must implement the diamond(n) method instead, and return None for invalid input.

JS Note

JS students, like Python ones, must implement the diamond(n) method, and return null for invalid input.
*/

function diamond (n) {
  if (n < 0 || n % 2 === 0) return null
  var diam = '*'.repeat(n)
  var counter = 1

  for (var i = n-2; i > 0; i-= 2) {
    var stars = '*'.repeat(i)
    var spaces = ' '.repeat(n - i - (counter++))

    diam = spaces + stars + '\n' + diam
    diam = diam + '\n' + spaces + stars
  }
  return diam + '\n'
}

// TESTS ********
var assert = require('assert')
describe('string-diamonds', () => {
  it('should return  *\n***\n *\n', () => {
    assert.equal(" *\n***\n *\n", diamond(3))
  })
  it('should return null for even number', () => {
    assert.equal(null, diamond(2))
    assert.equal(null, diamond(4))
  })
  it('should return null for negative number', () => {
    assert.equal(null, diamond(-3))
    assert.equal(null, diamond(0))
  })
})

// console.log(diamond(11))
