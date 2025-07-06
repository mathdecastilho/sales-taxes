const importTaxCalculator = require('./importTaxCalculator.js');
const basicTaxCalculator = require('./basicTaxCalculator.js');

const taxesCalculator = (items) => {
  return items.map((item) => {
    const basicTax = basicTaxCalculator(item);
    const importTax = importTaxCalculator(item);

    // Use precise arithmetic to avoid floating-point accumulation errors
    const taxes = Math.round((basicTax + importTax) * 100) / 100;
    const total = Math.round((item.total + taxes) * 100) / 100;

    return {
      ...item,
      taxes,
      total,
    };
  });
};

module.exports = taxesCalculator;
