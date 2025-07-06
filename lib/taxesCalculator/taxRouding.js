const ROUND_DIGIT = 5; // it will step 5 by 5
const STEPS = 1 / ROUND_DIGIT; // 1/5 = 0.2
const DECIMAL_PRECISION = 2; // second digit after the decimal point => 0.01
const POSITION_FACTOR = Math.pow(10, DECIMAL_PRECISION); // 100 for two decimal places
const ROUNDING_FACTOR = STEPS * POSITION_FACTOR; // 0.2 * 100 = 20

const taxRouding = (tax) => {
  return Math.ceil(tax * ROUNDING_FACTOR) / ROUNDING_FACTOR; // Round to the nearest 0.05
};

module.exports = taxRouding;
