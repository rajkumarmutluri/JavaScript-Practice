let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

const factorial = (num) => {
    if (num===0){
        return 1;
    }
    return num*factorial(num-1);
}

let num = parseInt(readLine());

num >= 0 ? console.log(factorial(num)) : console.log("undefined");