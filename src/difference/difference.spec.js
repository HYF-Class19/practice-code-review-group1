import { difference } from './difference.js';

describe('difference finds the difference in values between two arrays', () => {
  describe('when the array values are numbers', () => {
    it('whole numbers', () => {
      const expected = [11, 9];
      const actual = difference([2, 11, 4, 3, 11, 9], [2, 3, 4]);
      expect(actual).toEqual(expected);
    });
  });
});
