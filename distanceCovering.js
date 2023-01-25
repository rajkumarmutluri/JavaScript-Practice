let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function steps(n, memo = {}) {
  if (n <= 2) return n;
  if (n in memo) return memo[n];
  memo[n] = steps(n - 1, memo) + steps(n - 2, memo);
  return memo[n];
}

let t = parseInt(readLine());

while (t > 0) {
  console.log(steps(parseInt(readLine())));
  t--;
}
