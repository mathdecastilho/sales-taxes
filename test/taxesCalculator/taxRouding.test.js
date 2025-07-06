const taxRouding = require('../../lib/taxesCalculator/taxRouding.js');

describe('Tax Rounding', () => {
  it('rounds tax to the nearest 0.05', () => {
    expect(taxRouding(0.01)).toBe(0.05);
    expect(taxRouding(0.03)).toBe(0.05);
    expect(taxRouding(0.06)).toBe(0.10);
    expect(taxRouding(0.12)).toBe(0.15);
    expect(taxRouding(0.18)).toBe(0.20);
    expect(taxRouding(1.23)).toBe(1.25);
  });

  it('returns zero for zero tax', () => {
    expect(taxRouding(0)).toBe(0);
  });
});
