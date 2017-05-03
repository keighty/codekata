/* ./fundamentals/170503-duplicate-encoder.js
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

*/

function duplicateEncode(word){
  const letterArray = word.toLowerCase().split('')
  const letterQtys = letterArray.reduce((acc, letter) => {
    acc[letter] ? acc[letter] += 1 : acc[letter] = 1
    return acc
  }, {})

  return letterArray.map(char => {
    if (letterQtys[char] > 1) return ')'
    else return '('
  }).join('')
}


// TESTS ********
var assert = require('assert')

describe('duplicate encoder', () => {
  it('should return a string', () => {
    const string = duplicateEncode('foo')
    assert.equal('string', typeof string)
  })
  it('should replace a single character with (', () => {
    assert.equal('(', duplicateEncode('f'))
    assert.equal('((', duplicateEncode('fo'))
  })
  it('should replace a duplicate character with )', () => {
    assert.equal('())', duplicateEncode('foo'))
  })
  it('should ignore capitalization', () => {
    assert.equal('())', duplicateEncode('FoO'))
  })
})
