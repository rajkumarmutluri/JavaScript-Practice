let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1]
}

let a = readLine().split(" ")

let min = Number(a[0])
let max = Number(a[1])

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let i = 0

let listN = new Set()
let listM = new Map()

while (i < 20) {
  let num = getRandomNumber(min, max)

  listN.add(num)
  if (!listM.has(num)) {
    listM.set(num, 1)
  } else {
    count = listM.get(num)
    listM.set(num, count + 1)
  }
  i++
}

console.log(listN)
console.log(listM)
