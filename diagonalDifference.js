let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]

function diagonalDifference(matrix) {
  let n = matrix.length //sizeOfMatrix
  let pSum = 0
  for (let i = 0; i < n; i++) {
    pSum += matrix[i][i] - matrix[i][n - 1 - i]
  }
  return Math.abs(pSum)
}

console.log(diagonalDifference(matrix))
