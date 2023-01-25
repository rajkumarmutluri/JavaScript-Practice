let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1].trim()
}

function convertArrToNumbers(arr) {
  for (let i in arr) {
    arr[i] = Number(arr[i])
  }
}

let n = parseInt(readLine())
let arr = readLine().split(" ")

convertArrToNumbers(arr)

let TotalSwaps = 0

for (let i = 0; i < n; i++) {
  let swaps = 0
  for (let j = 0; j < n - i; j++) {
    if (arr[j + 1] < arr[j]) {
      ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      swaps++
    }
  }
  TotalSwaps += swaps
}

console.log(arr, TotalSwaps)
