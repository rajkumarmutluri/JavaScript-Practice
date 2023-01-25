let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function productNums(num){

    let n = parseInt(num/10);
    if(n===0){
        console.log(num);
        return num;
    }
    lastDigit = num%10 ;
    if(lastDigit===0){
        return 0;
    }
    
    prod = lastDigit*productNums(n)
    console.log(num);
        return prod;
    
}


let t = parseInt(readLine());

while(t>0){
    let prod = productNums(parseInt(readLine().trim()));
    console.log(prod);
    t--;
}