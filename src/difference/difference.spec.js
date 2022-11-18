import { difference } from './difference.js';

// const difference = require('./difference') previous version used
// to run tests

describe('difference finds the difference in values between two arrays', () => {
  describe('when input is not an array', () => {
    it('throw error when non array input are passed', () => {
      expect(() => difference('hello', [4, 88, 10])).toThrow(TypeError);
    });
    it('throw error when both inputs are not an arrays', () => {
      expect(() => difference('hello', 55)).toThrow(TypeError);
    });
  });
  describe('when one or none input is passed', () => {
    it('when no input are passed --> error', () => {
      expect(() => difference([], [])).toThrow(Error);
    });
    it('input array only --> Error: input array should not be empty', () => {
      expect(() => difference([2, 11, 4, 3, 11, 9], [])).toThrow(Error);
    });
    it('input array empty --> Error: input array should not be empty', () => {
      expect(() => difference([], [13, 5, 8, 8])).toThrow(Error);
    });
  });
  describe('when the array values are numbers', () => {
    it('whole numbers', () => {
      const expected = [11, 9];
      const received = difference([2, 11, 4, 3, 11, 9], [2, 3, 4]);
      expect(received).toEqual(expected);
    });
    it('whole numbers and decimal numbers', () => {
      const expected = [3, 6, 4.5];
      const received = difference([3, 5, 6, 33, 4.5, 8.8, 3.0], [5, 33, 8.8]);
      expect(received).toEqual(expected);
    });
    it('whole numbers and negative numbers', () => {
      const expected = [3, -5, 6, 4.5, -8.8];
      const received = difference(
        [3, -5, 6, -33, 4.5, -8.8, 3.0],
        [5, -33, 8.8],
      );
      expect(received).toEqual(expected);
    });
  });
  describe('when input elements are not numbers', () => {
    it('only string elements are passed', () => {
      const expected = ['cow', 'man', 'dog'];
      const received = difference(
        ['cow', 'man', 'dog', 'alien', 'c'],
        ['alien', 'c'],
      );
      expect(received).toEqual(expected);
    });
    it('mix of string and numbers', () => {
      const expected = ['b', 11, 7];
      const received = difference(['b', 'n', 11, 'y', 7, 0], [0, 'y', 'n']);
      expect(received).toEqual(expected);
    });
  });
});
