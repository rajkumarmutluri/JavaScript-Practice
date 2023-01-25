let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function palindromeCheck(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    let part = str.slice(1, str.length - 1);
    return palindromeCheck(part);
  }
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
  palindromeCheck(readLine().trim().toLowerCase()) ? console.log("True") : console.log("False");
}
