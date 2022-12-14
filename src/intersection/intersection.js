/* eslint-disable prefer-arrow/prefer-arrow-functions */
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the
 *  order of result values are determined by the first array.
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

const intersection = (array, values) => {
  if (!Array.isArray(array, values)) {
    throw new TypeError('it should be an array');
  }

  // find the intersection
  let newArray = array.filter((item) => values.includes(item));
  // ensure there are no duplicates
  newArray = [...new Set(newArray)];
  return newArray;
};

module.exports = intersection;
