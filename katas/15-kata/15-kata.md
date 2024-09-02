# 15th Kata -- Reversed Strings





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Complete the solution so that it reverses the string passed into it.
```js
'world'  =>  'dlrow'
'word'   =>  'drow'
```

## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  

```


## Notes

Easy problem but I used it to practice a more functional way of programming.

## My solution with comments:

```js
function solution(str){
  // creates an array, reverse it and then join the characters to a string
  return str.split('').reverse().join('')
}

```


## Results

```js

Time: 747ms Passed: 2Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
Testing for 100 random tests
Completed in 3ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[Shadow_Cat,](https://www.codewars.com/kata/reviews/516f302a7c907a79f200069f/groups/586369fc248954e777000474)*

```js
const solution = s => [...s].reverse().join('')
```

## Notes about the interesting one:

I found it interesting because I did not know you could create an array from a string using `[...s]`.

---