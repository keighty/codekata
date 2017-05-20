/* ./levelup/170510-base-conversion.js 4ku
In this kata you have to implement a base converter, which converts between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Examples:

// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be to large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
*/

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

// function convert(input, source, target) {
//   var inputArray = input.split('')
//   var targetArray = target.split('')
//
//   return inputArray.map(char => {
//     var sourceIndex = source.indexOf(char)
//     if (targetArray[sourceIndex]) {
//       return target[sourceIndex]
//     } else {
//       var numberOfLaps = sourceIndex / target.length
//       var remainder = sourceIndex % target.length
//       return `${target[target.length-1].repeat(numberOfLaps)}${target[remainder]}`
//     }
//   }).join('')
// }

function convert (input, source, target) {
  // the input is a value
  // every pass that is required pushes a 1 onto the string
  var input = +input
  // # of 1s = 
}

// TESTS ********
var assert = require('assert')
describe('example tests', function() {

  it('should convert dec to alpha', function() {
    assert.equal(convert('0', Alphabet.DECIMAL, Alphabet.ALPHA), 'a');
    assert.equal(convert('0', Alphabet.DECIMAL, Alphabet.ALPHA_UPPER), 'A');
  });
  it('should convert dec to BINARY', function() {
    // DECIMAL = '0123456789' (one number per bucket)
    // BINARY = '01' (two numbers per bucket)
    // OCTAL = '01234567'
    // 15 / 8 = 7
    // assert.equal(convert('15', Alphabet.DECIMAL, Alphabet.BINARY), '1111');
    assert.equal(convert('15', Alphabet.DECIMAL, Alphabet.OCTAL), '17');
  });

  // assert.equal(convert("1010", bin, dec), '10', '"1010" bin -> dec');
  // assert.equal(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
  // xit('should convert between other bases', function() {
  //   assert.equal(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
  //   assert.equal(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
  //   assert.equal(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex')
  //   assert.equal(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
  // });
});
