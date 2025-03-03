const validator = (input, type, min, max) => {
  const value = parseInt(input, 10);
  if (Number.isNaN(value) || value < min || value > max) {
    return `Please enter a valid ${type}, min. ${type} ${min}, max. ${type} ${max}`;
  }
  return true;
};

export default validator;
