# 3rd -- Two Sum

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

```js
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

```

## Test Examples

```js
Case 1
Input
nums =
[2,7,11,15]
target =
9
Expected
[0,1]

Case 2
Input
nums =
[3,2,4]
target =
6
Expected
[1,2]

Case 3
Input
nums =
[3,3]
target =
6
Expected
[0,1]

```

## Notes

This one was tricky, but I was able to solve it thinking of saving the current result as the key and the index as the value

## My solution with comments:

```js
var twoSum = function (nums, target) {
  // creates a hashmap
  let hash = {};
  // iterates over each value of nums
  for (let i = 0; i < nums.length; i++) {
    // substracts the target from the current nums item
    const x = target - nums[i];
    // if the hashmap has a key equals to x, it means that the current number plus the key equal the target, so we found our two numbers
    if (hash.hasOwnProperty(x)) {
      return [hash[x], i];
    } else {
      // otherwise creates a key equals to the current number in nums and set its value as the index
      hash[nums[i]] = i;
    }
  }
  // if no two numbers added equal the target, returns an empty array
  return [];
};
```

## Results

```js
Runtime
60
ms
Beats
68.45%

Memory
50.21
MB
Beats
55.50%

Case 1
Output
[0,1]
Expected
[0,1]

Case 2
Output
[1,2]
Expected
[1,2]

Case 3
Output
[0,1]
Expected
[0,1]

```

## Interesting LeetCode solution:

> by _[niits](https://leetcode.com/problems/two-sum/solutions/5139921/video-hashmap-solution)_

```js
var twoSum = function (nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (target - num in pairIdx) {
      return [i, pairIdx[target - num]];
    }
    pairIdx[num] = i;
  }
};
```

## Notes about the interesting one:

What I found interesting is that the solutions works the same as mine. I checked other 2 solutions and they all worked the same, using a hashmap, so it seems this was a question directed towards knowing how to implement a hashmap (object) in Javascript and how to play with the keys and values.

---