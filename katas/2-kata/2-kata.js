function arr2bin(arr) {
  if (arr.some(Number.isNaN)) {
    return 'NaN'
  }
  sum = arr.reduce((sum, current) => {
    if (typeof current === "number") {
      return sum += current
    } else {
      return sum
    }
  }, 0)
  let binary = []
  let decimalNumber = Math.abs(sum);
  while (decimalNumber > 0) {
    binary.unshift(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2)
  }
  if (sum < 0) {
    return "-" + binary.join('')
  }
  return binary.length ? binary.join('') : '0';
}