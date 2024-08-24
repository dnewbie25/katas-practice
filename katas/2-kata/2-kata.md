# 2nd Kata -- Arguments to Binary addition





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

### Arguments to Binary addition

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

```
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

```


## Test Examples

```js

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    let actual = arr2bin([1,2]);
    assertReturn(actual);
    assert.strictEqual(actual, "11")
    assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
    assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
    assert.strictEqual(arr2bin([null]), "0")
    assert.strictEqual(arr2bin([true,true,false,15]),"1111")
  });
  function assertReturn(v) {
    assert.isDefined(v, "Your function did not return any value. Did you log it to the console instead?");
  }
});

```


## Notes

There were some methods that used `toString(2)` or used bitwise operations. I preferred to use a `while loop` so I had to force myself to understand how decimal to binary conversion worked

## My solution with comments:

```js

function arr2bin(arr) {
  // check for NaN
  if (arr.some(Number.isNaN)) {
    return 'NaN'
  }
  // uses reduce to sum the elements of the array only if they are numbers. Otherwise use 0 as the value
  sum = arr.reduce((sum, current) => {
    if (typeof current === "number") {
      return sum += current
    } else {
      return sum
    }
  }, 0)
  let binary = []
  // uses the absolute value to find the binary number
  let decimalNumber = Math.abs(sum);
  while (decimalNumber > 0) {
    binary.unshift(decimalNumber % 2);
    decimalNumber = Math.floor(decimalNumber / 2)
  }
  // if the original number was negative, add a negative sign to the binary number
  if (sum < 0) {
    return "-" + binary.join('')
  }
  return binary.length ? binary.join('') : '0';
}

```


## Results

```js

Time: 747ms Passed: 2Failed: 0
Test Results:
arr2bin
should work for fixed tests
should work for random tests
Completed in 4ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[evk](https://www.codewars.com/kata/reviews/57642a95dee2da8dd3000163/groups/5771cd10509c65fecd000018)*

```js

function arr2bin(arr){
  return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
}

```

## Notes about the interesting one:

The use of `toString(2)` really simplified the program. It was actually more clearly understood than what I did. The `evk` solution use of reduce simplifies everything I did: validating that it is a number, using a 0 if not, getting the sum of the array and then converting to binary

---
