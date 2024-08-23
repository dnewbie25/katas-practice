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

Notes here

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
> by *[somebody](https://example.com)*

```js

//interesting solution here

```

## Notes about the interesting one:

Interesting kata notes here

---
