# 4th -- Group Anagrams





by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```js
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

```


## Test Examples

```js

Case 1
Input
strs =
["eat","tea","tan","ate","nat","bat"]
Expected
[["bat"],["nat","tan"],["ate","eat","tea"]]

Case 2
Input
strs =
[""]
Expected
[[""]]

Case 3
Input
strs =
["a"]
Expected
[["a"]]


```


## Notes

The algorithm was tricky, but thinking about using the sorted word as the key helped me a lot.

## My solution with comments:

```js
var groupAnagrams = function (strs) {
  // creates a hasmap with the keys as the word sorted alphabetically and the values as the words that matches the sorted key
  let hashmap = {}
  for(const i of strs){
    // every letter will be sorted so if a key exists, it means there is a word that matches, so they are anagarams
    const key = i.split('').sort().join('')
    if(hashmap.hasOwnProperty(key)){
     // pushes the current word into the corresponding array
      hashmap[key].push(i)
    }else{
      // otherwise it creates an array with the first word as the key
      hashmap[key] = [i]
    }
  }
  return Object.values(hashmap)
};

```


## Results

```js

Runtime
131
ms
Beats
21.10%

Memory
62.16
MB
Beats
79.64%

Case 1
Output
[["eat","tea","ate"],["tan","nat"],["bat"]]
Expected
[["bat"],["nat","tan"],["ate","eat","tea"]]

Case 2
Output
[[""]]
Expected
[[""]]

Case 3
Output
[["a"]]
Expected
[["a"]]
```

## Interesting LeetCode solution:
> by *[niits](https://leetcode.com/problems/group-anagrams/solutions/5641123/video-create-keys-for-group-of-strings-2-solutions)*

```js
var groupAnagrams = function(strs) {
    let ans = {};

    for (let s of strs) {
        let count = new Array(26).fill(0);

        // Count frequency of each letter in the string
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = count.join('#'); // Use a string as a key
        if (!ans[key]) {
            ans[key] = [];
        }
        ans[key].push(s);
    }

    return Object.values(ans);    
};

```

## Notes about the interesting one:

That solution is tricky but it finds the anagrams by doing a "zero-sum game" approach. Two words are anagrams if each one of their letters cancel out (add 1 and subtract 1 if the letter from one word in found in the other). Otherwise, they are different words. If they are anagrams, then push them to an array.
This solution although very efficient in terms of computing power, seems rather complex to understand at first what is does.

---