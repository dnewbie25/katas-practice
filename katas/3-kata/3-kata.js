function onlyDuplicates(str) {
  let charactersObject = {}
  for(const char of str){
    charactersObject[char] = charactersObject[char]+1 || 1
  }
  let onlyDups = ''
  for (const char of str){
    if(charactersObject[char]>1){
        onlyDups += char
    }
  }
  return onlyDups
}
