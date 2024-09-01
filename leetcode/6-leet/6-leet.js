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