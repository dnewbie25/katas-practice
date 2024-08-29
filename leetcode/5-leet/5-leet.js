var topKFrequent = function (nums, k) {
  let hashmap = {}
  for(const num of nums){
      hashmap[num] = hashmap[num]+1 || 1
  }
  let sortedElements = Object.entries(hashmap).sort((a,b)=>b[1]-a[1]).slice(0,k)
  let kElements = []
  for(let i=0;i<k;i++){
      kElements.push(Number(sortedElements[i][0]))
  }
  return kElements
};