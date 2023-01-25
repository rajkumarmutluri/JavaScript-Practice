let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1].trim()
}

let str = readLine()

let strArr = str.split(":")

let ConvertedTime = str.slice(0, -2)

if (strArr[2].charAt(2) == "P" && strArr[0] < 12) {
  strArr[0] = (Number(strArr[0]) + 12).toString()
  strArr[2] = strArr[2].slice(0, -2)
  ConvertedTime = strArr.join(":")
}

if (strArr[2].charAt(2) == "A" && strArr[0] == 12) {
  strArr[0] = "00"
  strArr[2] = strArr[2].slice(0, -2)
  ConvertedTime = strArr.join(":")
}

console.log(ConvertedTime)
