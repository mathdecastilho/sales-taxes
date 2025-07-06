const inputParser = require('./inputParser.js');
const printer = require('./printer.js');
const taxesCalculator = require('./taxesCalculator/index.js');

const app = (input) => {
  let items = inputParser(input);

  items = taxesCalculator(items);

  // Use precise arithmetic to avoid floating-point accumulation errors
  const totalTaxes = items.reduce((sum, item) => {
    return Math.round((sum + item.taxes) * 100) / 100;
  }, 0);

  const total = items.reduce((sum, item) => {
    return Math.round((sum + item.total) * 100) / 100;
  }, 0);

  return printer(items, totalTaxes, total);
};

module.exports = app;
