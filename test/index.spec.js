import converter, { convertStringToNumber } from '../src';

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

test('named export | convert string " 2 " to integer 2', () => {
  const input = ' 2 ';
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

test('named export | convert string " 2.2 " to float 2.2', () => {
  const input = ' 2.2 ';
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

test('named export | convert string "" to NaN', () => {
  const input = '';
  const expected = NaN;

  const result = convertStringToNumber(input);

  expect(result).toBe(expected);
});

test('named export | convert string " " to NaN', () => {
  const input = ' ';
  const expected = NaN;

  const result = convertStringToNumber(input);

  expect(result).toBe(expected);
});

test('named export | convert string "3.352.2" to NaN', () => {
  const input = '3.352.2';
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


test('named export | throw because wrong value type (undefined)', () => {
  const input = undefined;

  const result = () => convertStringToNumber(input);

  expect(result).toThrow('value has to be typeof: \'string\' but got typeof: \'undefined\'');
});

test('named export | throw because wrong value type (object)', () => {
  const input = {};

  const result = () => convertStringToNumber(input);

  expect(result).toThrow('value has to be typeof: \'string\' but got typeof: \'object\'');
});

test('named export | null input throws because wrong value type (object)', () => {
  const input = null;

  const result = () => convertStringToNumber(input);

  expect(result).toThrow('value has to be typeof: \'string\' but got typeof: \'object\'');
});

