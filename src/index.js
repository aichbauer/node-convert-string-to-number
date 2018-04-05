import { checkIfValid } from './helpers/check-if-valid';

export const convertStringToNumber = (value) => {
  checkIfValid(value);

  if (Number.isNaN(Number(value))) {
    // if not a number
    return NaN;
  }

  const float = parseFloat(value);

  // check if integer
  if (float % 1 === 0) {
    const int = parseInt(value, 10);

    return int;
  }

  return float;
};

export default convertStringToNumber;
