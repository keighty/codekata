/* ./fundamentals/170508-reverse-words.js
Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

Example:

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverse_words("This is an example!") # returns  "sihT si na !elpmaxe"
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"
*/

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

// TESTS ********
var assert = require('assert')
describe('reverse-words', () => {
  it('should do something', () => {
    var result = reverseWords("This is an example!")
    assert.equal("sihT si na !elpmaxe", result)
  })
  // xit('should do something', () => {})
})
