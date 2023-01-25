let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1].trim()
}

let numOfCandles = parseInt(readLine())

let candles = readLine().split(" ")

let tallCandle = candles[0]
let count = 1

for (let i = 1; i < numOfCandles; i++) {
  if (candles[i] > tallCandle) {
    tallCandle = candles[i]
    count = 1
  } else if (candles[i] == tallCandle) {
    count++
  }
  console.log(tallCandle, candles[i], count)
}

console.log(count)
