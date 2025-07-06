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

  it('handles floating-point precision issues correctly', () => {
    // Test case that would fail with floating-point precision issues
    expect(taxRouding(14.99 * 0.1)).toBe(1.5); // 14.99 * 0.1 = 1.499, should round to 1.5
    expect(taxRouding(0.1499)).toBe(0.15); // Should round to 0.15
    expect(taxRouding(0.562)).toBe(0.60); // Should round to 0.60
    expect(taxRouding(0.999)).toBe(1.00); // Should round to 1.00
  });

  it('handles edge cases with precise decimal values', () => {
    expect(taxRouding(0.05)).toBe(0.05); // Exact 0.05 should remain 0.05
    expect(taxRouding(0.10)).toBe(0.10); // Exact 0.10 should remain 0.10
    expect(taxRouding(0.15)).toBe(0.15); // Exact 0.15 should remain 0.15
    expect(taxRouding(0.20)).toBe(0.20); // Exact 0.20 should remain 0.20
  });
});
