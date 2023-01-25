let fs = require("fs")
let data = fs.readFileSync(0, "utf-8")
let idx = 0
data = data.split("\n")

function readLine() {
  idx++
  return data[idx - 1]
}

let t = parseInt(readLine())

for (let i = 0; i < t; i++) {
  let [n, k] = readLine().trim().split(" ")
  //   console.log(Number(n), Number(k))

  let positions = []

  for (let j = 0; j < n; j++) {
    positions[j] = j + 1
  }

  console.log(deathGame(Number(n), Number(k), positions))
}

function deathGame(n, k, positions, memo = 0) {
  if (positions.length < 2) return positions[0]

  //   for (let i = memo; i < n; i = i + k) {
  //     console.log(n, positions)
  //     if (i + k < n) {
  //       positions.splice(i + k - 1, 1)
  //       i--
  //     }

  //     if (i + k >= n) {
  //       memo = ((i + k) % n) - (k - 1)
  //       m = positions.length
  //       console.log(positions, n)
  //       return deathGame(m, k, positions, memo)
  //     }
  //   }

  let arr = positions.filter((value, index) => !((index + 1 - memo) % k === 0))
  memo = n % k
  m = positions.length

  //   console.log(arr)
  return deathGame(m, k, arr, memo)
}
