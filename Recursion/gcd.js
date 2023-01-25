function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

function GCD(array) {
  if (array.length === 2) return gcd(array[0], array[1])
  let [a, ...rest] = array

  return gcd(a, GCD(rest))
}

console.log(GCD([50, 10, 150, 20, 3550]))
