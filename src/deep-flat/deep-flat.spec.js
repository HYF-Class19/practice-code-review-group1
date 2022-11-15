import { deepFlat } from './deep-flat.js';

describe('Converts a nested array into a single array with no nesting', () => {
  describe('Converts a nested array into a single array', () => {
    it('whole numbers', () => {
      const expected = [1, 2, 3, 4, 5];
      const actual = deepFlat([1, [2, [3, [4]], 5]]);
      expect(actual).toEqual(expected);
    });
    it('whole letters', () => {
      const expected = ['a', 'b', 'c', 'd', 'e'];
      const actual = deepFlat(['a', ['b'], [['c'], ['d']], ['e']]);
      expect(actual).toEqual(expected);
    });
    it('for numbers and leters', () => {
      const expected = [1, 2, 3, 'a', 'b', 'c', 'd'];
      const actual = deepFlat([1, [2], [3], ['a'], [['b']], ['c'], [['d']]]);
      expect(actual).toEqual(expected);
    });
    it('with empty array', () => {
      const expected = [];
      const actual = deepFlat([]);
      expect(actual).toEqual(expected);
    });
    it('the function should return new array', () => {
      const array = [1, [2, [3, [4]], 5]];
      expect(deepFlat(array) === array).toEqual(false);
    });
  });
});
