/* ./fundamentals/170504-printer-errors.js
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/

function printerError(s) {
  const validColours = "abcdefghijklm"
  let incorrect = s.split('').reduce((acc, letter) => {
    if (!validColours.includes(letter)) {
      acc += 1
    }
    return acc
  }, 0)
  return `${incorrect}/${s.length}`
}

// TESTS ********
var assert = require('assert')

describe('printerError', () => {
  it('should return a string', () => {
    const string = printerError('foo')
    assert.equal('string', typeof string)
  })
  it('should return 0/14', () => {
    const s="aaabbbbhaijjjm"
    assert.equal('0/14', printerError(s))
  })
  it('should return 8/22', () => {
    const s = "aaaxbbbbyyhwawiwjjjwwm"
    assert.equal('8/22', printerError(s))
  })
  it('should return 0/0 for empty string', () => {
    const s = ""
    assert.equal('0/0', printerError(s))
  })
})
