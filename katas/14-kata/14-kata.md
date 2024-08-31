# 14th Kata -- Vowel Count





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Return the number (count) of vowels in the given string.

We will consider `a, e, i, o, u` as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


## Test Examples

```js

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

```


## Notes

It was a good kata to practice the `reduce()` method.

## My solution with comments:

```js

function getCount(str) {
  // creates an array from str, then if the current letter is a vowel, sum 1
  return str.split('').reduce((sum, current)=> 'aeiou'.includes(current)?sum+=1:sum,0);
}

```


## Results

```js
Time: 881ms Passed: 6Failed: 0
Test Results:
Vowels Count Tests
should return 5 for 'abracadabra'
should return 4 for 'pear tree'
should return 13 for 'o a kak ushakov lil vo kashu kakao'
should return 0 for 'my pyx'
should return 168 for a long input
should return correct results for random tests
Completed in 8ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[Balkoth](https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/54ff6303c502952f8d00023e)*

```js

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

## Notes about the interesting one:

It was interesting to see an answer using regex, I need to familiarize myself more with that. It is matching only vowels, otherwise returns an empty array and then gets the length.

---