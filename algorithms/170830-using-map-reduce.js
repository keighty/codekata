/* ./algorithms/170830-using-map-reduce.js
 data = [1,2,3,4,5,6,7,8,9,10]
 [11,12,13,14,15,16,17,18,19,20]
 [21,22,23,24,25,26,27,28,29,30]

desired outcome
[11/1, 12/2,13/3,14/4,15/5,16/6,17/7,18/8,19/9,20/10]
[21/11,22/12,23/13,24/14,25/15,26/16,27/17,28/18,29/19,30/20]
*/

// TESTS ********

const data = [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30]
]

const acc = [[], []]
for (var i = 0; i < data[0].length; i++) {
  acc[0].push(`${data[1][i]}/${data[0][i]}`)
  acc[1].push(`${data[2][i]}/${data[1][i]}`)
}
console.log(acc)

const output = data[0].map((currentValue, index, array) => {
  return `${data[1][index]}/${currentValue}`
})

console.log(output)

const reduced = data[0].reduce((acc, value, index) => {
  acc[0].push(`${data[1][index]}/${value}`)
  acc[1].push(`${data[2][index]}/${data[1][index]}`)
  return acc
}, [[], []])

console.log(reduced)
