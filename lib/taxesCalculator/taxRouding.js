const ROUND_DIGIT = 5; // it will step 5 by 5
const DECIMAL_PRECISION = 2; // second digit after the decimal point => 0.01
const POSITION_FACTOR = Math.pow(10, DECIMAL_PRECISION); // 100 for two decimal places

const taxRouding = (tax) => {
  // Convert to integer cents to avoid floating-point precision issues
  const taxInCents = Math.round(tax * POSITION_FACTOR);

  // Round up to the nearest 5 cents using integer arithmetic
  const roundedCents = Math.ceil(taxInCents / ROUND_DIGIT) * ROUND_DIGIT;

  // Convert back to decimal
  return roundedCents / POSITION_FACTOR;
};

module.exports = taxRouding;
