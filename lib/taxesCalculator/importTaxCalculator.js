const taxRouding = require('./taxRouding.js');

const TAX_FEE = 0.05; // 5% tax

const importTaxCalculator = (item) => {
  if (!item.imported) return 0; // No import tax for non-imported items

  return taxRouding(item.price * TAX_FEE) * item.quantity;
};

module.exports = importTaxCalculator;
