const importTaxCalculator = require('./importTaxCalculator.js');
const basicTaxCalculator = require('./basicTaxCalculator.js');

const taxesCalculator = (items) => {
  return items.map((item) => {
    const basicTax = basicTaxCalculator(item);
    const importTax = importTaxCalculator(item);
    const taxes = basicTax + importTax;

    return {
      ...item,
      taxes,
      total: item.total + taxes,
    };
  });
};

module.exports = taxesCalculator;
