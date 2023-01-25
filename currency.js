let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

function decrypt(str) {
  if (str.length === 1) return Number(str);
  let last = str.slice(-1);
  let rem = str.slice(0, str.length - 1);
  let sum = Number(last) + Number(decrypt(rem));
  return sum;
}

console.log(decrypt(readLine()));
