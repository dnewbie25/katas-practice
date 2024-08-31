function highAndLow(numbers){
  let arr = numbers.split(' ')
  arr = arr.map(e=>parseInt(e)).sort((a,b)=>a-b)
  return [arr[arr.length-1],arr[0]].join(' ')
}