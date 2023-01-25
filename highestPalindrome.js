let b = "raj".replace("raj".charAt(0), 2);

// console.log([24, 13, 4, 78].sort((a, b) => a - b));

function palindromeCheck(str) {
  let l = str.length;
  if (l <= 1) return true;
  if (str.charAt(0) !== str.charAt(l - 1)) return false;
  return palindromeCheck(str.slice(1, l - 1));
}

// for n = 1

function NumberOfChangesToPalindrome(str) {
  let count = 0;
  let l = str.length;
  for (let i = parseInt((l - 1) / 2); i >= 0; i--) {
    if (str.charAt(i) !== str.charAt(l - 1 - i)) {
      count++;
    }
  }

  return count;
}

console.log(NumberOfChangesToPalindrome("0101"));
