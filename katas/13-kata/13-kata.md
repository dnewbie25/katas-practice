# 13th Kata -- Highest and Lowest





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

```js
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.


## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});


```


## Notes

This question was very easy to solve using a `map`, but the tricky part was the `sort`. It was necessary to pass the function to substract `a-b` in order for the sort to work numerically and not just by ASCII sorting.

## My solution with comments:

```js
function highAndLow(numbers){
  // creates an array from the string
  let arr = numbers.split(' ')
  // cast strings to numbers and then sort it
  arr = arr.map(e=>parseInt(e)).sort((a,b)=>a-b)
  // returns largest and smallest number
  return [arr[arr.length-1],arr[0]].join(' ')
}

```


## Results

```js

Time: 737ms Passed: 10Failed: 0
Test Results:
Fixed tests
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[colbydauph](https://www.codewars.com/kata/reviews/55565cd093eb1235210000a0/groups/55c3e755d024a7915300012a)*

```js
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
```

## Notes about the interesting one:

Simple, understandable. I never thought about it, honestly.

---