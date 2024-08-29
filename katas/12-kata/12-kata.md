# 12th Kata -- Array.diff





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

`arrayDiff([1,2],[1]) == [2]`
If a value is present in b, all of its occurrences must be removed from the other:

`arrayDiff([1,2,2,2,3],[2]) == [1,3]`


## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});

```


## Notes

A good way to practice the `includes()` function, but I don't think this one if a 6-kyu kata. It should be 7 kyu at most.

## My solution with comments:

```js

function arrayDiff(a, b) {
  // create a new array
  let newArr = []
  // if the current item of a is not found on b, then push it to newArr
  for(const i of a){
    if(!b.includes(i)){
      newArr.push(i)
    }
  }
  return newArr
}
```


## Results

```js

Time: 898ms Passed: 41Failed: 0
Test Results:
Basic tests
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[zloyrusskiy](https://www.codewars.com/kata/reviews/523f5d21c841566fde00000c/groups/57973a0e4be912fd22000205)*

```js
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

```

## Notes about the interesting one:

I think this one is more understandable than mine when you read it. I need to improve using the built-in functions

---