let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1].trim()
}

let arraySize = parseInt(readLine())
let array = readLine().split(" ")
let arraySum = 0

for (let number of array) {
  arraySum += Number(number)
}

console.log(arraySum)

let ArrSum = array.reduce((ArrSum, number) => {
  return ArrSum + Number(number)
}, 0)

console.log(ArrSum)
