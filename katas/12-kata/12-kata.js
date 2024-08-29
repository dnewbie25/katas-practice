function arrayDiff(a, b) {
  let newArr = []
  for(const i of a){
    if(!b.includes(i)){
      newArr.push(i)
    }
  }
  return newArr
}