const taxRouding = require('./taxRouding.js');

const TAX_FREE_CATEGORIES = [
  'book',
  'food',
  'medical',
];

const TAX_FEE = 0.10; // 10% tax

const basicTaxCalculator = (item) => {
  const isTaxFree = TAX_FREE_CATEGORIES.includes(item.category);

  if (isTaxFree) return 0; // No tax for tax-free items

  return taxRouding(item.price * TAX_FEE) * item.quantity;
};

module.exports = basicTaxCalculator;
