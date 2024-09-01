# 6th -- String Encode and Decode




by *[dnewbie25](https://leetcode.com/u/dnewbie25/)*


## Task

Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement `encode` and `decode`

```js
Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]

```


## Test Examples

```js
Case 1
Input:

["neet","code","love","you"]
Your Output:

["neet","code","love","you"]
Expected output:

["neet","code","love","you"]

Case 2
Input:

["we","say",":","yes"]
Your Output:

["we","say",":","yes"]
Expected output:

["we","say",":","yes"]

```


## Notes

This one was very difficult. I need to look for explanations as the inner loop for the `j` index must not only help to get the index of the `#` symbols but also help to position the index at the right position to get the word length and then get the correct word based on that length.

This question is now part of the LeetCode Pro subscription. I completed it on an copycat website called LintCode. On top off that, almost everybody solved the problem in Python using built-in functions, it was very difficult to get an explanation and solutions for Javascript.

## My solution with comments:

```js
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // returns a new array for each word preceeded by their lengths plus a # symbol, like 4#code or 5#jeans
    return strs.map(word => `${word.length}#${word}`).join('')
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // creates an array to store each word and an index i=0
    let newStr = []
    let i = 0
    while (i < str.length) {
      let j = i
      // loops from i to j until the character is a '#' to get the entire integer that represents the length of the word that comes next
      while (str[j] !== '#') {
        j += 1
      }
      // converts the newly obtained word length to a number
      let lengthOfString = Number(str.slice(i,j)) // this will be the total number representing the string length that should be extracted from the string
      newStr.push(str.slice(j+1,j+1+lengthOfString)) // gets the word
      i = j+ 1+ lengthOfString // sets the index to start checking again now from the index of the last letter of the word it has just found
    }
    return newStr
  }
}

```


## Results

```js

Accepted

Passed test cases: 20 / 20
You have successfully completed this problem!

```

## Interesting LeetCode solution:
> The website has only 62 attempted solutions for this problem. No solutions for Javascript

This solution was found in [PrepForTech](https://prepfortech.io/leetcode-solutions/encode-and-decode-strings)


```js
// Encodes a list of strings to a single string.
function encode(strings) {
    let encodedString = '';
    for (let i = 0; i < strings.length; i++) {
        let currentString = strings[i];
        encodedString += currentString.length + '#' + currentString;
    }
    return encodedString;
}

// Decodes a single string to a list of strings.
function decode(encodedString) {
    let strings = [];
    let startIndex = 0;
    while (startIndex < encodedString.length) {
        let endIndex = encodedString.indexOf('#', startIndex);
        let stringLength = parseInt(encodedString.substring(startIndex, endIndex));
        let currentString = encodedString.substring(endIndex + 1, endIndex + 1 + stringLength);
        strings.push(currentString);
        startIndex = endIndex + 1 + stringLength;
    }
    return strings;
}
```

## Notes about the interesting one:

I found that solutions and studied for this problem. It was a very thorough explanation.

---