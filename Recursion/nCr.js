let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function binomialCoefficient(n, r, memo = {}) {
  const key1 = n + "," + r;
  const key2 = n + "," + n - r;
  if (r === 0 || n === r) return 1;
  if ((key1 || key2) in memo) return memo[key1];
  memo[key1] = binomialCoefficient(n - 1, r - 1, memo) + binomialCoefficient(n - 1, r, memo);
  return memo[key1];
}

let t = parseInt(readLine());

while (t > 0) {
  let a = readLine().split(" ");
  console.log(binomialCoefficient(Number(a[0]), Number(a[1])));

  t--;
}
