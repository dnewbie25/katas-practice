# 4th Kata -- Convert number to reversed array of digits





by *[dnebwie25](https://www.codewars.com/users/dnewbie25)*


## Task


Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


```
35231 => [1,3,2,5,3]
0 => [0]

```


## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});

```


## Notes

It was easy to complete. I wanted to practice the `map()` function.

## My solution with comments:

```js

function digitize(n) {
  // converts the number n to a string
  let numberString = n.toString();
  // splits the newly created string into an array
  let arr = numberString.split('');
  // uses map to convert the new array items to integers and then reverse it
  return arr.map(num=>parseInt(num)).reverse()
}

```


## Results

```js

Time: 776ms Passed: 2Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
Testing for 37 random tests
Completed in 1ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[pwynn](https://www.codewars.com/kata/reviews/558309189bfb9444fb000250/groups/562d145aad4c54446c00005b)*

```js

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

```

## Notes about the interesting one:

I didn't know that `Array.from()` accepted a second argument that acts as a `map()` for each element of the new array

---