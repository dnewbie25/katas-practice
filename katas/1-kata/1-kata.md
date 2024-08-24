# 1st Kata -- Square(n) Sum


by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

### Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for `[1, 2, 2]` it should return `9` because $`1^2 + 2^2 + 2^2 = 9`$.




## Test Examples

```js

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});

```


## Notes

First completed kata. Pretty easy algorithm, but my goal was to practice the `reduce()` function since it has been difficult for me to grasp its use cases.

## My solution with comments:

```js

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0);
}
```


## Results

```js

Time: 793ms Passed: 41 Failed: 0
Test Results:
basic tests
random cases
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[kobiorhs](https://www.codewars.com/kata/reviews/516f30277c907a79f2000549/groups/54cd0c0253e8c11e01000543)*

```js

function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}
```

## Notes about the interesting one:

Using the math module for something that can be solved easily with `**`

---
