const inputParser = require('./inputParser.js');
const { basicTaxCalculator, importTaxCalculator } = require('./taxesCalculator/index.js');
const printer = require('./printer.js');
const taxesCalculator = require('./taxesCalculator/index.js');

const app = (input) => {
  let items = inputParser(input);

  items = taxesCalculator(items);

  const totalTaxes = items.reduce((sum, item) => sum + item.taxes, 0);
  const total = items.reduce((sum, item) => sum + item.total, 0);

  return printer(items, totalTaxes, total);
};

module.exports = app;
