let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1]
}

let a = readLine().split(" ")

let n = parseInt(a[0])
let d = parseInt(a[1])

let arr = readLine().split(" ")

function rotateLeft(d, arr) {
  while (d > 0) {
    arr.push(arr.shift())
    d--
  }

  console.log(...arr)
}

rotateLeft(d, arr)
