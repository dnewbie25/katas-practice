# 10th Kata -- Last





by *[dnewbie25](https://www.codewars.com/users/dnewbie25)*


## Task

Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

Examples
```js
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]

```


## Test Examples

```js

describe("last (...)", function() {
    const { assert } = require('chai');

    it('single non-iterable argument', function() {
        assert.strictEqual(last(5), 5, 'last(5)');
    });
    it('single string argument', function() {
        assert.strictEqual(last("123"), "3", 'last("123")');
    });
    it('single array argument', function() {
        assert.strictEqual(last([1, 2, 3]), 3, 'last([1, 2, 3])');
    });
    it('single element array', function() {
        assert.strictEqual(last([1]), 1, 'last([1])');
    });
    it('single nested array argument', function() {
        assert.deepEqual(last([1, 2, 3, [4, 5]]), [4, 5], 'last([1, 2, 3, [4, 5]])');
    });
    it('multiple arguments', function() {
        assert.strictEqual(last(1, 2, 3), 3, 'last(1, 2, 3)');
    });
    it('multiple iterable arguments', function() {
        assert.strictEqual(last('a', 'b', 'c'), 'c', "last('a', 'b', 'c')");
        assert.deepEqual(last([1], [2], [3]), [3], "last([1], [2], [3])");
    });
    it('multiple arguments, last is iterable', function() {
        assert.deepEqual(last(1, 2, 3, [4, 5]), [4, 5], 'last(1, 2, 3, [4, 5])');
    });
});

```


## Notes

Notes here

## My solution with comments:

```js
function last(...args) {
  // if the args length is 1, checks if it is a 2D array and returns its last element
  if(args.length===1){
    if(typeof args[0]==='object'){
      return args[0][args[0].length-1]
    }else if(typeof args[0] === 'string'){
      // if it happens to be a string, returns the last character
      return args[0][args[0].length-1]
    }else{
      // otherwise, it is a single element, return it alone
      return args[0]
    }
  }else{
    // if args is a 1D array, returns the last element
    return args[args.length-1]
  }
}

```


## Results

```js
Time: 864ms Passed: 9Failed: 0
Test Results:
last (...)
single non-iterable argument
single string argument
single array argument
single element array
single nested array argument
multiple arguments
multiple iterable arguments
multiple arguments, last is iterable
random tests
Completed in 6ms
You have passed all of the tests! :)

```

## Interesting Kata solution:
> by *[hencethus](https://www.codewars.com/kata/reviews/54185ce61d3bf30b5400013a/groups/57a7bac2e298a7d0af00026f)*

```js
function last(first, ...rest) {
  if (rest.length) return rest.pop();
  if (first.length) return [...first].pop();
  return first;
}
```

## Notes about the interesting one:

This solutions is very easy to understand. If the `rest` argument has a length>0, then it means it is has multiple arguments, so it just returns the last element. `pop()` will return the last element no matter if it is a 1D or 2D array.
If `first` has a length>0, it means it is a single array passed as an argument. So it justs `pop()` the last element of the spread array `...first`.

---