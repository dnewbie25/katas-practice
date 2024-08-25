# 2nd -- Valid Anagram

by _[dnewbie25](https://leetcode.com/u/dnewbie25/)_

## Task

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

```js
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

```

## Test Examples

```js
Case 1
Input
s =
"anagram"
t =
"nagaram"
Expected
true

Case 2
Input
s =
"rat"
t =
"car"
Expected
false
```

## Notes

This was a good exercise to practice a more declarative way of programming using Jasvascript built-in methods.

## My solution with comments:

```js
var isAnagram = function (s, t) {
  // if the length is different, hence it's not an anagram
  if (s.length !== t.length) {
    return false;
  }
  // compares the two strings once the letters were sorted alphabetically. Must be the same words to be an anagram
  return s.split("").sort().join("") === t.split("").sort().join("");
};
```

## Results

```js
Runtime
76
ms
Beats
39.54%

Memory
53.64
MB
Beats
41.37%

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
```

## Interesting LeetCode solution:

> by _[Vikas-Pathak-123](https://example.com)_

```js
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};
```

## Notes about the interesting one:

The solutions seems rather complex, but what is does is to create an array that represents all the 26 letters of the alphabet. Then it adds 1 for each letter in the string `s` to the corresponding index in the array (i.e. 'a' is the 1st letter, so it adds 1 to the index 0). If the letter is found in `t`, then it substracts 1. If both words are anagrams, the final alphabet array must contain only zeros 0, because each letter in `s` cancels out with each letter in `t`. 

If the final array contains at least 1 position which is not a 0, then it means that one letter was not canceled out, so there is a mismatch between `s` and `t`. That way it will return `false` because they are not anagrams.

---
