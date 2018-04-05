export const checkIfValid = (value) => {
  if (typeof value !== 'string') {
    throw new Error(`value has to be typeof: 'string' but got typeof: '${typeof value}'`);
  }
};
