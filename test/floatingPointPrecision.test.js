const app = require('../lib/index.js');

describe('Floating Point Precision Tests', () => {
  it('handles problematic floating-point calculations correctly', () => {
    // Test case with 14.99 * 0.1 = 1.499 (problematic in floating-point)
    const input = '1 music CD at 14.99';
    const output = app(input);

    expect(output).toEqual(`1 music CD: 16.49
Sales Taxes: 1.50
Total: 16.49`);
  });

  it('handles multiple items with potential accumulation errors', () => {
    const input = '1 book at 12.49\n1 music CD at 14.99\n1 chocolate bar at 0.85';
    const output = app(input);

    expect(output).toEqual(`1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.50
Total: 29.83`);
  });

  it('handles imported items with complex tax calculations', () => {
    const input = '1 imported bottle of perfume at 47.50';
    const output = app(input);

    expect(output).toEqual(`1 imported bottle of perfume: 54.65
Sales Taxes: 7.15
Total: 54.65`);
  });

  it('handles edge cases with precise decimal values', () => {
    // Test with values that should result in exact 0.05 increments
    const input = '1 music CD at 10.00';
    const output = app(input);

    expect(output).toEqual(`1 music CD: 11.00
Sales Taxes: 1.00
Total: 11.00`);
  });

  it('handles zero tax cases correctly', () => {
    const input = '41 book at 0.01';
    const output = app(input);

    expect(output).toEqual(`41 book: 0.41
Sales Taxes: 0.00
Total: 0.41`);
  });
});
