
# 16th Kata -- Friend or Foe?





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

```
Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}
```


## Test Examples

```js
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
  })
})

```


## Notes

This was a good kata to practice the `filter()` method.

## My solution with comments:

```js

function friend(friends){
  return friends.filter(friend=>friend.length===4)
}
```


## Results

```js
Time: 839ms Passed: 2Failed: 0
Test Results:
Basic tests
Testing for fixed tests
Completed in 2ms
Random tests
Testing for 40 random tests
Completed in 2ms
You have passed all of the tests! :)
```

## Interesting Kata solution:
> by *[Paragon](https://example.com](https://www.codewars.com/kata/reviews/565f42480b9d78fa10000063/groups/56c86f65edbf3e5bc7000ab4))*

```js

function friend(friends){
  //your code here
  var realFriends = [];
  for(i=0; i<friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      realFriends.push(friends[i]);
    }
  }
  
  return realFriends
}
```

## Notes about the interesting one:

This one was one of the only answers that did not use `filter()` method, but the loop and the validation for empty strings was very good.

---
