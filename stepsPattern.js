// The code has a function that creates staircase of n steps

function stepsPattern(n) {
  for (let i = 1; i <= n; i++) {
    let iStep = " ".repeat(n - i) + "#".repeat(i)
    console.log(iStep)
  }
}

stepsPattern(6)
