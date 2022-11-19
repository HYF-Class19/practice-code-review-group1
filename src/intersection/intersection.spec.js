const intersection = require('./intersection');

describe('Take two arrays and return their intersection', () => {
  it('Should filter common items', () => {
    const array = [1, 2, 3, 4, 5];
    const values = [3, 4, 7];
    expect(intersection(array, values)).toEqual([3, 4]);
  });
  // when first array is empty
  it('Should return an empty array when one array is empty', () => {
    const array = [];
    const values = [3, 4, 7];
    expect(intersection(array, values)).toEqual([]);
  });

  // when second array is empty
  it('Should return an empty array when one array is empty', () => {
    const array = ['James', 'John', 'Bob'];
    const values = [];
    expect(intersection(array, values)).toEqual([]);
  });
  // when both arrays are empty
  it('Should return an empty array when both arrays are empty', () => {
    const array = [];
    const values = [];
    expect(intersection(array, values)).toEqual([]);
  });

  // when first input is not an array
  it('should throw type error when first input is not an array', () => {
    const array = 'john';
    const values = [3, 4, 7];
    expect(() => intersection(array, values)).toThrow(TypeError);
  });

  // when second input is not an array
  it('should throw type error when second input is not an array', () => {
    const array = ['john', 'fred', '246'];
    const values = 52;
    expect(() => intersection(array, values)).toThrow(TypeError);
  });

  // when both inputs are not arrays
  it('should throw type error when both inputs are not an array', () => {
    const array = 911;
    const values = '3, 4, 7';
    expect(() => intersection(array, values)).toThrow(TypeError);
  });
  // when common items are differently ordered
  it('Should order intersecting values according to order of first array', () => {
    const array = ['James', 'John', 'Bob', 84, 72];
    const values = [84, 'John', 71];
    expect(intersection(array, values)).toEqual(['John', 84]);
  });

  // when the array contains repeated items
  it('Should return an empty array when both arrays have no items in common', () => {
    const array = ['James', 'John', 'Bob'];
    const values = [3, 4, 7];
    expect(intersection(array, values)).toEqual([]);
  });

  // when arrays have duplicate items
  it('Should not duplicate Repeated values in the return value', () => {
    const array = ['James', 5, 8, 5, 'James', 'John', 'Bob'];
    const values = [3, 'James', '', 5, 5, 4, 7];
    expect(intersection(array, values)).toEqual(['James', 5]);
  });
});
