# Difference

Write a function that removes specific values from an array. The values to
remove are provided as a second array argument. The function should therefore
result in only non-duplicate numbers

---

## Docstring

```js
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
```

## Strategy

My thinking is yo use the very convenient `array.filter()` method. This method
can easily be adapted to solve a wide range of challenges.

## Implementation

- To start off, I initialized a variable `result` to store the filtered numbers
  in an array
- Then I passed the `array.filter()` to find numbers that are present in both
  the first and second array
- This needed the inclusion of another array method `array.includes()` which
  returns `true` or `false`
- If the results is `true` then the number is filtered out and becomes part of
  the `result` array
- After getting the result array, then we `filter` it to remove `duplicate`
  numbers
- This was achieved by passing an `arrow function` within the filter method that
  checks if the `indexOf` each number exactly (`===`) matched its `index`
- For numbers that occur more than once, the second occurrence of the number
  will fail this test and as a result will not be filtered out

## Use cases

We may use this function to clean input data from user by removing certain
disallowed values/inputs

```js
const userRemarks = ['hardworking', 'cool', 'stupid', 'helpful', 'lazy'];
const badComments = ['lazy', 'stupid', 'lier'];

const difference = (array1, array2) => {
  const result = array1.filter((num) => !array2.includes(num));
  return result.filter((num, index) => {
    return result.indexOf(num) === index;
  });
}; // 'hardworking', 'cool', 'helpful'
```

## Inspiration

- I read how to remove duplicate elements in an array from an article by
  [JavaScript - Tutorial](https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/)
- This method has a wide range of applicability as it can also easily clean
  input data to remove repetitions and disallowed inputs
