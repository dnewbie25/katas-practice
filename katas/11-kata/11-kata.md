# 11th Kata -- Highest Value Pyramid





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

### kataNameHere
Pyramid building in Egypt
You are a Pharaoh in ancient Egypt, and you want to build the perfect pyramid for yourself. There's only a limited number of stones, however, and different kinds of stones vary in their value. You want to maximize the value of your pyramid while keeping it exactly three layers high.

In essence, you're given an array of integers, which represent the stones, and your task is to assemble the highest-value pyramid from them. The pyramid is made out of exactly three layers, containing:

Top layer: 1 integer
Middle layer: 2 identical integers
Bottom layer: 3 identical integers
Additionally, no integer can appear in two or more layers. That is, each layer is made from stones of the same value, and stones of the same value can be used at most in one layer.

Graphically, the structure of the pyramid looks like this, where $ x\neq{y}\neq{z} $
```js
    [z]
  [y] [y]
 [x][x][x]

```
Input
The input is an array that may contain positive and negative integers, as well as zeros. The integers are in no specific order and can be repeated. The array may also be empty.

Output
The output is a single integer – the sum of all integers that make up the pyramid. For example, given input [1,1,1,2,2,2,3,3,3], the highest-value pyramid is:
```js
    [1]
  [2] [2]
 [3][3][3]
```
And the sum is thus: $3*3+2*2+1=14$

If it's not possible to build a pyramid from the given array (e.g. `[-1,-1,0,0,1,1]` or an empty one `[]`), return None, null, or other language-specific alternative.

Clarification
Remember that there's no rule for descending or ascending order, so there's no restriction on placing the highest integer from the array on top of the pyramid.

## Test Examples

```js
const {assert} = require("chai");

describe("Highest Value Pyramid", function() {
  it("description example tests", function() {
    assert.strictEqual( pyramid([1,1,1,2,2,2,3,3,3]), 14, `pyramid([1,1,1,2,2,2,3,3,3])` );
    assert.strictEqual( pyramid([-1,-1,0,0,1,1]), null, `pyramid([-1,-1,0,0,1,1])` );
    assert.strictEqual( pyramid([]), null, `pyramid([])` );
  });
  it("more example tests", function() {
    assert.strictEqual( pyramid([1,1,1,2,2,3]), 10,`pyramid([1,1,1,2,2,3])` );
    assert.strictEqual( pyramid([5,3,5,3,0,0,-1,0,0,3,3,3]), 19, `pyramid([5,3,5,3,0,0,-1,0,0,3,3,3])` );
    assert.strictEqual( pyramid([1,0,-1,-1,-2,-1,-2,-10]), -6, `pyramid([1,0,-1,-1,-2,-1,-2,-10])` );
    assert.strictEqual( pyramid([-10,-10,-6,6,-6,4,-6,4,2,0,10,-10,-10]), 0, `pyramid([-10,-10,-6,6,-6,4,-6,4,2,0,10,-10,-10])` );
    assert.strictEqual( pyramid([7,7,7,7,7,7]), null, `pyramid([7,7,7,7,7,7])` );
    assert.strictEqual( pyramid([10,10,5,5,1,1]), null, `pyramid([10,10,5,5,1,1])` );
  });
});

```


## Notes

This one is not a 7-kyu kata. It seems more like a 5-kyu at least. 

## My solution with comments:

```js

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

```


## Results

```js
Time: 846ms Passed: 4Failed: 0
Test Results:
Highest Value Pyramid
description example tests
more example tests
fixed tests
random tests
Completed in 32ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[Alex_18010](https://www.codewars.com/kata/reviews/66c880eb984b7121720bc605/groups/66ce78025382f96b6629cdca)*

```js

function pyramid(stones) {
    // Contar la frecuencia de cada piedra
    let frequency = {};
    for (let stone of stones) {
        if (frequency[stone] === undefined) {
            frequency[stone] = 1;
        } else {
            frequency[stone]++;
        }
    }

    // Filtrar los números por las capas necesarias
    let baseCandidates = [];
    let middleCandidates = [];
    let topCandidates = [];

    for (let stone in frequency) {
        if (frequency[stone] >= 3) {
            baseCandidates.push(parseInt(stone));
        }
        if (frequency[stone] >= 2) {
            middleCandidates.push(parseInt(stone));
        }
        if (frequency[stone] >= 1) {
            topCandidates.push(parseInt(stone));
        }
    }

    // Buscar la mejor combinación para maximizar el valor de la pirámide
    let maxSum = null;
    for (let base of baseCandidates) {
        for (let middle of middleCandidates) {
            if (middle !== base) {
                for (let top of topCandidates) {
                    if (top !== base && top !== middle) {
                        let sum = 3 * base + 2 * middle + top;
                        if (maxSum === null || sum > maxSum) {
                            maxSum = sum;
                        }
                    }
                }
            }
        }
    }

    return maxSum;  // Devuelve la suma máxima o null si no es posible construir la pirámide
}

```

## Notes about the interesting one:

Logically, both solutions do the same. They separate the numbers into possible candidates and then search for the better combination that gets the higher sum, but their solution is more legible than mine. That's why I found it useful.

---
