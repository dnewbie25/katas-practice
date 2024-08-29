# 5th -- Top K Frequent Elements





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

```js
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

```


## Test Examples

```js
Case 1
Input
nums =
[1,1,1,2,2,3]
k =
2
Expected
[1,2]

Case 2
Input
nums =
[1]
k =
1
Expected
[1]

Case 3
Input
nums =
[4,1,-1,2,-1,2,3]
k =
2
Expected
[2,-1]

```


## Notes

This solutions required a lot of objects manipulation. I had to look for how to sort an object based on its values. It was tricky.

## My solution with comments:

```js
var topKFrequent = function (nums, k) {
  // creates a hasmap or object that counts the number of times a number is repeated
  let hashmap = {}
  for(const num of nums){
      hashmap[num] = hashmap[num]+1 || 1
  }
  // sorts the object based on the number of times the key is repeated
  let sortedElements = Object.entries(hashmap).sort((a,b)=>b[1]-a[1]).slice(0,k)
  // creates an array to push the k-most frequent number
  let kElements = []
  for(let i=0;i<k;i++){
      kElements.push(Number(sortedElements[i][0]))
  }
  return kElements
};

```


## Results

```js
Runtime
52
ms
Beats
97.92%

Memory
54.26
MB
Beats
49.00%

Case 1
Output
[1,2]
Expected
[1,2]

Case 2
Output
[1]
Expected
[1]

Case 3
Output
[2,-1]
Expected
[2,-1]

```

## Interesting LeetCode solution:
> by *[mageshyt](https://leetcode.com/problems/top-k-frequent-elements/solutions/1927877/javascript-python-crystal-clear-explanation-with-animation)*

```js
const topKFrequent = (nums, k) => {
  const map = new Map(); //! map to count the frequency of the number
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  const result = [];
  for (let [key, value] of map) {
    result.push([key, value]); //! we will add the number and its frequency
  }
  result.sort((a, b) => b[1] - a[1]); //! we will solve with respect to the frequency of the number
  return result.slice(0, k).map((x) => x[0]); //! we will slice the list with respect to length of k
};

```

## Notes about the interesting one:

Upon reviewing that and other couple of solutions, they all do the same as mine, although with better coding practices and optimizing the code more. They create a hashmap or a `map` to store the number and count its frequency, then get the k-most frequent numbers and return an array with them.

---