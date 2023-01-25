// The problem is about finding a fraction of positive, negative and zero
// numbers in the given array i.e., as a proportion to the array size to the six decimal places

let arr = [1, -2, 3, 0, 3, 4, 0, -7]
let arrSize = arr.length
let [positiveCount, negativeCount, zeroesCount] = [0, 0, 0]

for (let num of arr) {
  if (num > 0) positiveCount++
  if (num < 0) negativeCount++
  if (num === 0) zeroesCount++
}

let pF = (positiveCount / arrSize).toFixed(6)
let nF = (negativeCount / arrSize).toFixed(6)
let zF = (zeroesCount / arrSize).toFixed(6)

console.log(pF)
console.log(nF)
console.log(zF)
