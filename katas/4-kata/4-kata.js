function digitize(n) {
  let numberString = n.toString();
  let arr = numberString.split('');
  return arr.map(num=>parseInt(num)).reverse()
}