# 7th Kata -- Bit Counting





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case


## Test Examples

```js

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
    })
  })

```


## Notes

I had solved another kata about binary conversion, where I learned about `toString(2)` to make the conversion more easily.

## My solution with comments:

```js

var countBits = function(n) {
  // convert n to a string representing the binary form, then creates an array of the digits
  let nArr = n.toString(2).split('')
  // use reduce to sum the 1's, need to convert the digit from string to Number before the addition
  return nArr.reduce((sum, current)=> sum+=Number(current),0)
  
};

```


## Results

```js
Time: 809ms Passed: 101Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 1ms
Random tests
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[m_x86](https://www.codewars.com/kata/reviews/5265c12a1c3e2482920009e2/groups/5267e3762406723c630007a0)*

```js

var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};

```

## Notes about the interesting one:

This solutions just removes the 0's out of the array, counting the elements to get the sum o 1's. A clever solution and easy to understand

---