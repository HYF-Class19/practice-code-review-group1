import { deepFlat } from './deep-flat.js';

describe('Converts a nested array into a single array with no nesting', () => {
  it('array with numbers ', () => {
    const expected = [1, 2, 3, 4, 5];
    const received = deepFlat([1, [2, [3, [4]], 5]]);
    expect(received).toEqual(expected);
  });
  it('array with words ', () => {
    const expected = ['h', 'a', 'p', 'p', 'y'];
    const received = deepFlat([['h', ['a', ['p']], ['p'], 'y']]);
    expect(received).toEqual(expected);
  });
  it('when array is string', () => {
    const expected = ['', ''];
    const received = deepFlat([[''], ['']]);
    expect(received).toEqual(expected);
  });
});
describe('Has not side effect', () => {
  it('The function should return new array', () => {
    const array = [1, [2, [3, [4]], 5]];
    expect(deepFlat(array) === array).toEqual(false);
  });
});
describe('When empty array passed function should not throw an error ', () => {
  it('When is epty array', () => {
    const expected = [];
    const received = deepFlat([]);
    expect(expected).toEqual(received);
  });
});
describe('when no argument passed should apply default argument', () => {
  it('When default argument', () => {
    const expected = [];
    const received = deepFlat();
    expect(received).toEqual(expected);
  });
});
