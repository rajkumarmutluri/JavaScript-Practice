// The code is about repeating(concatinating) a given string N-times

function repeatString(str, N) {
  let pStr = ""
  for (let i = 0; i < N; i++) {
    pStr += str
  }
  return pStr
}

console.log(repeatString("hello ", 7))
