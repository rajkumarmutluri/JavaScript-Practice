let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function recursiveSeries(num) {
  if (num <= 9) {
    return num;
  }
  if (num % 2 === 0) {
    return recursiveSeries(num - 10);
  } else {
    return recursiveSeries(num - 9);
  }
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  let num = parseInt(readLine());
  console.log(recursiveSeries(num));
}
