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

export const difference = (array1, array2) => {
  // filter array1 for values that are included in array2
  const filterArr = array1.filter((num) => !array2.includes(num));

  // filter the result to remove any duplicate values
  return filterArr.filter((num, index) => {
    return filterArr.indexOf(num) === index;
  });
};
