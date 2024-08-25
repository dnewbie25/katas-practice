# 1st -- Contains Duplicate

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

```js
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

```

## Test Examples

```js
Case 1
Input
nums =
[1,2,3,1]
Expected
true

Case 2
Input
nums =
[1,2,3,4]
Expected
false

Case 3
Input
nums =
[1,1,1,3,3,4,3,2,4,2]
Expected
true

```

## Notes

Notes here

## My solution with comments:

```js
var containsDuplicate = function (nums) {
  // creates a hash table for each element with the number of occurrences as the value for each number.
  let numsHash = {};
  for (const i of nums) {
    numsHash[i] = numsHash[i] + 1 || 1;
    // Then checks if the value is greater than 1. If so, the number is duplicated, so it returns true
    if (numsHash[i] > 1) {
      return true;
    }
  }
  return false;
};
```

## Results

```js

Runtime
81
ms
Beats
51.45%

Memory
61.6
MB
Beats
60.73%

Case 1
Output
true
Expected
true

Case 2
Output
false
Expected
false

Case 3
Output
true
Expected
true


```

## Interesting LeetCode solution:

> by _[PratikSen07](https://leetcode.com/problems/contains-duplicate/solutions/2459020/very-easy-100-fully-explained-c-java-python-javascript-python3-creating-set)_

```js
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};
```

## Notes about the interesting one:

Uses `sets`, which by definition contain only unique values. So when creating the set, if the set has the same length as the original array, then it must be an array of unique elements only. Otherwise, there were duplicate elements, hence it will return `false`.

---
