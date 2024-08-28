function pyramid(stones) {
  let hashmap = {}
  // counts the number of times a numbers repeats and saves it into a hashmap
  for(const i of stones){
    if(hashmap.hasOwnProperty(i)){
      hashmap[i].push(i)
    }else{
      hashmap[i] = [i]
    }
  }
  // if there is only 1 key, then the same number is repeated, return null
  let keysLength = Object.keys(hashmap).length
  if(keysLength===1){
    return null
  }

  /* here I check distinct keys. There should be at least one with 3 elements, one with 2 and one with 1. So the slots will be
  slots = [3,2,1], the sum of the elements must be 6 to form the pyramid
  */
  let slots = [0,0,0]
  let i = 0
  for(const key in hashmap){
    
    const len = hashmap[key].length
    
    if(len>=3){
      slots[i] = 3
    }else if(len>=2){
      slots[i] = 2
    }else if(len>=1){
      slots[i] = 1
    }
    i+=1
  }
  
  let slotsSum = slots.reduce((sum, current)=>sum+=current,0)
  
  if(slotsSum<6){
    return null
  }
  // if there is no value repeated 3 times, returns null, a pyramid cannot be created without a base of 3 numbers
  let values = Object.values(hashmap)
  let notThree = values.every(i=>i.length<3)
  if(notThree){
    return null
  }

  // creates the possible rows depending of how many times a number repeats
  
  let bottoms = Object.fromEntries(
    Object.entries(hashmap).filter(e=>e[1].length>=3)
  );

  let mids = Object.fromEntries(
    Object.entries(hashmap).filter(e=>e[1].length>=2)
  );

  let tops = Object.fromEntries(
    Object.entries(hashmap).filter(e=>e[1].length>=1)
  );

  let total = undefined;
  /* loops through each possible row going top to bottom. If they are all different and the sums of the top +  mid*2 + bottom*3
  /* because the pyramid shoudl look like
  /*
      [x]
    [y][y]
  [z][z][z]
  */
  for(const k1 in tops){   
    for(const k2 in mids){
      for(const k3 in bottoms){
        if(k1!==k2&&k2!==k3&&k1!==k3){
          let newSum = tops[k1][0] + mids[k2][0]*2 + bottoms[k3][0]*3
          if(total===undefined){
            total = newSum
          }else if(newSum > total){
            total = newSum
          }
        }
      }
    }
  }
  return total
}

console.log(pyramid([6,6,6,6,6,6,1,0]));
console.log('aaaaaaaaaaaaaaaaaaaaaaaa');

console.log(pyramid([1,1,1,2,2,2,3,3,3]));
