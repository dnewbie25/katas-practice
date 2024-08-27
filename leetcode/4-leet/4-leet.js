function a(strs) {
  let hashmap = {}
  for(const i of strs){
    const key = i.split('').sort().join('')
    if(hashmap.hasOwnProperty(key)){
      hashmap[key].push(i)
    }else{
      hashmap[key] = [i]
    }
  }
  return Object.values(hashmap)
};