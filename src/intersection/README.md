# Intersection

It is a function that finds all the values shared between two arrays, and if
there are duplicate values among them, reduces the duplicate values to a single
value.

> _For example, if an item exists two arrays, the intersection function can be
> used to filter out the items that exist in the two arrays, while eradicating
> duplicates, making sure that no item is listed more than once. One can do this
> by spreading the filtered array._

---

## Strategy

intersection(array, values) ->

1. Create two arrays to fill with values? Some of which are present in the other
   array, and/duplicated in home array.
2. Use `.filter` method to filter array.
3. use `.include` as the filter condition.
4. use the spread `...` operator to prevent duplicates.

## Implementation

- The intersection is a way of finding common values between two arrays.
- I need to filter it based on a condition, which is that one value og array
  must exist in the other array.
- It returns an array of value that might contain duplicate values.

        I prevented this by spreading it and eradicating duplicated items.

- I write my intersection function directly inside `...intersection.js(...)`

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * intersection([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * intersection([2, 1, 2], [2, 3]);
 * // -> [2]
 */
```

> Docstring is adapted from
> [lodash's intersection](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498)
