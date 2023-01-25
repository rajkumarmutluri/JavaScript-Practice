arr = [1, 2, 3, 4, 5]

ar = arr.map(e => parseInt(e / 10))
// console.log(parseInt(05));

// console.log("");

// console.log(__dirname);
// console.log(__filename);

// setTimeout(() => {
//   console.log("hello");
//   clearInterval(interval);
// }, 8000);

// const interval = setInterval(() => {
//   console.log("Rajkumar");
// }, 1000);

let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let k = 2
// let arra = positions.filter((value, index) => (index + 1) % k === 0)

for (let i in positions) {
  positions[i] = positions[i] * 2
}

console.log(Object.getOwnPropertyNames(String))
