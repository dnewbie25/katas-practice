# 6th Kata -- String ends with?





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```js
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

```


## Test Examples

```js

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});


```


## Notes

I was thinking of doing this with a loop, but then after searching a bit I found the `slice()` method, so I just needed to retrieve the last `n-th` characters (depending on the `ending` string length) and compare.

## My solution with comments:

```js

function solution(str, ending){
  // creates and slice of the last characters of the original str
  // if the slice is equal to the ending string, returns true
  return str.slice(str.length-ending.length)===ending
}

```


## Results

```js

Time: 876ms Passed: 1Failed: 0
Test Results:
Tests
test
Completed in 1ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[odaba](https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/575cd0b881ce1de7af00013f)*

```js
function solution(str, ending){
  return str.endsWith(ending);
}
```

## Notes about the interesting one:

I knew that `endsWith()` existed, but I did not use it because for me that would have been against the purpose of the task, which was trying to find another way to compare the endings of the two strings.

---