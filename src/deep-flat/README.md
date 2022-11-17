# Deep-Flat

Deep-Flat it a process of reducing the number of dimensions of an array to a
lower number.

For example, if an array exists within an array, the flat function can be used
to concatenate the two arrays into one. One can do this by merging the inner
array elements with those of the outer one.

---

## Strategy

I chose flat() method

## Implementation

There were a few tricky things :

- the `.deepFlat` method is a process of reducing the number of dimensions of an
  array to a lower number.

- I need to converts a nestested array into nested array ( nested array is
  `defined as Array (Outer array) within another array (inner array)`) with no
  nesting.

- It returns a new array and there are no side-effects (side-efects is
  `Any operation that is not directly related to the final output of the function`).
  I needed to create a copy of array.

I write my deep-Flat function directly inside `...deep-flat.js(...)`,

## Use Cases

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */
```

> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)
