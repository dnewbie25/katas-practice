# 8th Kata -- Multiples of 3 or 5





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.


## Test Examples

```js
const { assert } = require("chai")

function test(n, expected) {
  it(`n=${n}`, () => {  
    let actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function(){
  test(10,23)
})
```


## Notes

I have found that reduce is really handy for multiple problems that need sum of array elements or conversions.

## My solution with comments:

```js
function solution(number){
  // if negative, return 0
  if(number<0){
    return 0
  }
  // create an array to save the multiples
  let multiples = []
  for(let i=1;i<number;i++){
    if(i%3===0 || i%5===0){
      multiples.push(i)
    }
  }
  // adding up the elements of the array
  return multiples.reduce((sum, current)=>sum+=current,0)
}
```


## Results

```js
Time: 979ms Passed: 111Failed: 0
Test Results:
basic tests
smallest cases
random cases
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[somebody](https://example.com)*

```js
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
```

## Notes about the interesting one:

This one removes the array I used and simply sums the number found to a variable `sum`, which also removed the need to use the `reduce()` I had to use at the end. I overcomplicated the solution using an array.

---