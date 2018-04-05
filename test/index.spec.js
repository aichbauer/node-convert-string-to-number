import converter, { convertStringToNumber } from '../lib';

test('default export | convert string "2" to integer 2', () => {
  const input = '2';
  const expected = 2;

  const result = converter(input);

  expect(result).toBe(expected);
});

test('named export | convert string "2" to integer 2', () => {
  const input = '2';
  const expected = 2;

  const result = convertStringToNumber(input);

  expect(result).toBe(expected);
});

test('named export | convert string "2.2" to float 2.2', () => {
  const input = '2.2';
  const expected = 2.2;

  const result = convertStringToNumber(input);

  expect(result).toBe(expected);
});

test('named export | convert string "franz" to NaN', () => {
  const input = 'franz';
  const expected = NaN;

  const result = convertStringToNumber(input);

  expect(result).toBe(expected);
});

test('named export | throw because wrong value type (number)', () => {
  const input = 2;

  const result = () => convertStringToNumber(input);

  expect(result).toThrow('value has to be typeof: \'string\' but got typeof: \'number\'');
});

test('named export | throw because wrong value type (undefined)', () => {
  const input = undefined;

  const result = () => convertStringToNumber(input);

  expect(result).toThrow('value has to be typeof: \'string\' but got typeof: \'undefined\'');
});
