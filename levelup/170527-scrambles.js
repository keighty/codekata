/* ./levelup/170527-scrambles.js
Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
describe('Intial Tests', function(){
  Test.assertEquals(scramble('rkqodlw','world'),true);
  Test.assertEquals(scramble('cedewaraaossoqqyt','codewars'),true);
  Test.assertEquals(scramble('katas','steak'),false);
  Test.assertEquals(scramble('scriptjava','javascript'),true);
  Test.assertEquals(scramble('scriptingjava','javascript'),true);
  Test.assertEquals(scramble('scriptsjava','javascripts'),true);
  Test.assertEquals(scramble('jscripts','javascript'),false);
  Test.assertEquals(scramble('aabbcamaomsccdd','commas'),true);
});
*/
// Attempt 1
// function scramble(str1, str2) {
//   return regexString(str2).test(sortString(str1))
// }
//
// function sortString (str) {
//   return str.split('').sort().join('')
// }
//
// function regexString (str) {
//   const regexString = str.split('').sort().join('.*')
//   return new RegExp(regexString);
// }

// attempt2
// return .forEach(function (acc, letter) {
//   const index = str1.indexOf(letter)
//   if (index) {
//     acc.push(letter)
//     str1 = str1.replace(letter, '')
//   }
//   return acc
// }, []).length === str2.length

function scramble (str1, str2) {
  const arr1 = str1.split('').sort()
  const arr2 = str2.split('').sort()
  for (var i = 0; i < arr2.length; i++) {
    const index = arr1.indexOf(arr2[i])
    if (index < 0) return false
    arr1[index] = ''
  }
  return true
}

// TESTS ********
var assert = require('assert')
describe('scrambles', () => {
  it('should match a scrambled word', () => {
    assert.equal(scramble('rkqodlw','world'),true)
  })
  it('should do another thing', () => {
    assert.equal(scramble('jscripts','javascript'),false)
  })
})
