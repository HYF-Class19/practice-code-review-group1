/** 

@param {Array[]} [array = []] // Converts a nested array into a single array with no nesting
@returns {Array} // It returns a new array and there are no side-effects

@example 
 deepFlat([1, [2, [3, [4]], 5]]);
 -> [1, 2, 3, 4, 5]

 
 deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 -> ['a', 'b', 'c', 'd', 'e']
*/

export const deepFlat = (array = []) => {
  const newArray = [...array];
  return newArray.flat(Infinity);
};
