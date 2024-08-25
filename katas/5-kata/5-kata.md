# 5th Kata -- I love you, a little , a lot, passionately ... not at all

by _[dnewbie25](https://www.codewars.com/users/dnewbie25)_

## Task

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

<ol>
<li>"I love you"</li>
<li>"a little"</li>
<li>"a lot"</li>
<li>"passionately"</li>
<li>"madly"</li>
<li>"not at all"</li>
</ol>

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("howMuchILoveYou", function () {
  it("Basic tests", function () {
    assert.strictEqual(howMuchILoveYou(7), "I love you");
    assert.strictEqual(howMuchILoveYou(3), "a lot");
    assert.strictEqual(howMuchILoveYou(6), "not at all");
  });
});
```

## Notes

Got some issues with the 6th petal. I was able to solve the problem although it was overcomplicated for the task

## My solution with comments:

```js
function howMuchILoveYou(nbPetals) {
  // object with the options
  const options = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  // if petals > 6, then using the remainder to determine which phrase will the girl end up with.
  if (nbPetals > 6) {
    console.log(`a = ${nbPetals}`);
    // if the remainder is 6, it means the girl used the last petal, so the option would be the last one
    return nbPetals % 6 === 0 ? options[6] : options[nbPetals % 6];
  } else {
    return options[nbPetals];
  }
}
```

## Results

```js
Time: 763ms Passed: 2Failed: 0
Test Results:
howMuchILoveYou
Basic tests
Completed in 1ms
Random tests
Testing for 100 random tests
Completed in 6ms
You have passed all of the tests! :)
```

## Interesting Kata solution:

> by _[igor_rajnjak](https://www.codewars.com/kata/reviews/57f277426486746cb5000009/groups/58b85a6c745c8cd771000219)_

```js
function howMuchILoveYou(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}
```

## Notes about the interesting one:

While I had to use a conditional to handle the 6th petal, I never thought about just reordering the last phrase as the first one, which makes a lot of sense because if the flower has 6 petals, the remainder of the petals will be 0, so I didn't need to create the conditionals, just returning the object in the way `options[nbPetals%6]` would have been enough.

---
