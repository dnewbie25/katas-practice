# 9th Kata -- Human Readable Time





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

### kataNameHere

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)


```js
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

```


## Test Examples

```js

describe('tests', function() {

  const { strictEqual } = require("chai").assert;

  function doTest(seconds, expected) {
    const actual = humanReadable(seconds);
    strictEqual(actual, expected, `for ${seconds} seconds\n`);
  }

  it('sample tests', function() {
    doTest(     0, '00:00:00');
    doTest(    59, '00:00:59');
    doTest(    60, '00:01:00');
    doTest(    90, '00:01:30');
    doTest(  3599, '00:59:59');
    doTest(  3600, '01:00:00');
    doTest( 45296, '12:34:56');
    doTest( 86399, '23:59:59');
    doTest( 86400, '24:00:00');
    doTest(359999, '99:59:59');
  });
});

```


## Notes

I had a difficult time calculating the hours. I thinkg using the `Date()` object would have worked but I choose to do the question without built-in datetime functions.

## My solution with comments:

```js
function humanReadable (seconds) {
  // Makes the operations to get the correct values
  const minutes = seconds/60;
  const hours = Math.floor(minutes/60);
  const second = seconds%60;
  // creates an array with the values in the forma '00' in case they are less than 10
  let arr = [hours, Math.floor(minutes%60), second].map(i=> {
    return i<10?`0${i}`:`${i}`
  })
  // returns a string with the format 'HH:MM:SS'
  return arr.join(':');
}

```


## Results

```js
Time: 810ms Passed: 2Failed: 0
Test Results:
tests
fixed tests
random tests
Completed in 3ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[markm247](https://www.codewars.com/kata/reviews/52685f7482004e774f0001fa/groups/572493aa440cd2538c000eca)*

```js
function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds/3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds/60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}

```

## Notes about the interesting one:

The interesting parts are `seconds -= HH * 3600` and `seconds -= MM * 60`, which are useful ways to handle the remaining time after doing each operation. They calculate the hours, then subtract whole hours (in terms of seconds) to get remaining seconds. Then calculate how many minutes are there, then subtract those (in terms of seconds again) to the new remaining seconds and that's how they get the total hours, minutes and seconds.

---