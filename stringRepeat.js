function stringRepeat(str, n) {
  let newStr = ""
  while (n > 0) {
    newStr += str
    n--
  }

  return newStr
}

console.log(stringRepeat("Raj", 5))
