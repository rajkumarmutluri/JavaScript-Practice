let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function hackMoney(n, memo = [0]) {
  if (n === 1) return true;
  if (n % 10 === 0) {
    n = n / 10;
    memo[0]++;
    return hackMoney(n, memo);
  }
  if (memo[0] > 0 && n % 2 === 0) {
    n = n / 2;
    memo[0]--;
    return hackMoney(n, memo);
  }
  return false;
}

let t = parseInt(readLine());

while (t > 0) {
  let num = parseInt(readLine());
  hackMoney(num) ? console.log("Yes") : console.log("No");
  t--;
}
