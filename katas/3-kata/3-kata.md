# 3rd Kata -- Only Duplicates





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"


## Test Examples

```js
const { assert } = require('chai')

describe('Basic tests', function () {
  it('Small numbers', function () {
    assert.strictEqual(onlyDuplicates('abccdefee'), 'cceee', "onlyDuplicates('abccdefee')")
    assert.strictEqual(onlyDuplicates('hello'), 'll', "onlyDuplicates('hello')")
    assert.strictEqual(onlyDuplicates('colloquial'), 'ollol', "onlyDuplicates('colloquial')")
    assert.strictEqual(onlyDuplicates('foundersandcoders'), 'ondersndoders', "onlyDuplicates('foundersandcoders')")
  })
})
```


## Notes

Although this one was fairly easy for me as a 6 kyu kata, I think I still struggled to make the code compact. I tend to write more than needed just to keep track of each step of the process

## My solution with comments:

```js
function onlyDuplicates(str) {
  // create an object to make a character count
  let charactersObject = {}
  for(const char of str){
    charactersObject[char] = charactersObject[char]+1 || 1
  }
  // create an empy string
  let onlyDups = ''
  // iterate over each character in str, if the count is greater than one
 // then add the character to onlyDups string
  for (const char of str){
    if(charactersObject[char]>1){
        onlyDups += char
    }
  }
  return onlyDups
}

```


## Results

```js
Time: 836ms Passed: 2Failed: 0
Test Results:
Fixed tests
should return only duplicate characters
Completed in 13ms
Random tests
should return only duplicate characters
Completed in 8ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[dinglemouse](https://www.codewars.com/kata/reviews/5a1dca7be8193f08c40038f1/groups/5a1e047019b112fef4002b56)*

```js
function onlyDuplicates(str) {
  return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('')
}
```

## Notes about the interesting one:

It is complex to understand at first what it does. But it was very clever the way they did it. The part that confused me was the use of `filter()`, but then I realized it is filtering characters whose first index is different from the last index they appear in the string. That way they remove all characters with the same first and last index because it would mean those characters only appear at those specific positions and hence they are not duplicated across the string.

---
