let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function nsum(n){
   if(n<=1) {
    console.log(1,1);
    return 1;
    }

    let psum = n+nsum(n-1)
    console.log(n,psum);
    return psum;
}

let n = parseInt(readLine());

nsum(n);
