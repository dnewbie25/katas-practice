var countBits = function(n) {
  let nArr = n.toString(2).split('')
  return nArr.reduce((sum, current)=> sum+=Number(current),0)
};