let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------

function recSeq(num) {
  if (num === 1) return 1;
  let sum = recSeq(num - 1) + nthterm(num);
  return sum;
}

function nthterm(n) {
  let m = (n * (n + 1)) / 2;
  let prod = 1;
  for (let i = 0; i < n; i++) {
    prod *= m - i;
  }
  return prod;
}

let t = parseInt(readLine());

while (t > 0) {
  let num = parseInt(readLine());
  console.log(recSeq(num));
  t--;
}
