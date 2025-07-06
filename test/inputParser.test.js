const inputParser = require('../lib/inputParser.js');

describe('Input Parser', () => {
  describe('when there are only one item', () => {
    const input = `1 book at 12.49`;
    const output = [{
      category: 'book',
      imported: false,
      price: 12.49,
      product: 'book',
      quantity: 1,
      taxes: 0,
      total: 12.49,
    }];

    it('parses the input correctly', () => {
      const result = inputParser(input);
      expect(result).toEqual(output);
    });
  });

  describe('when there are multiple items', () => {
    const input = `2 book at 12.49
1 music CD at 14.99
1 chocolate bar at 0.85`;
    const output = [
      { quantity: 2, imported: false, product: 'book', price: 12.49, category: 'book', total: 24.98, taxes: 0 },
      { quantity: 1, imported: false, product: 'music CD', price: 14.99, category: 'other', total: 14.99, taxes: 0 },
      { quantity: 1, imported: false, product: 'chocolate bar', price: 0.85, category: 'food', total: 0.85, taxes: 0 },
    ];

    it('parses the input correctly', () => {
      const result = inputParser(input);
      expect(result).toEqual(output);
    });
  });

  describe('when there are imported items', () => {
    const input = `1 imported box of chocolates at 10.00
1 bottle of perfume at 47.50`;
    const output = [
      { quantity: 1, imported: true, product: 'box of chocolates', price: 10.00, category: 'food', total: 10.00, taxes: 0 },
      { quantity: 1, imported: false, product: 'bottle of perfume', price: 47.50, category: 'other', total: 47.50, taxes: 0 },
    ];

    it('parses the input correctly', () => {
      const result = inputParser(input);
      expect(result).toEqual(output);
    });
  });

  describe('when the input is invalid', () => {
    const input = `invalid input line`;

    it('throws an error', () => {
      expect(() => inputParser(input)).toThrow('Invalid input line: invalid input line');
    });
  });

  describe('when there are more then one digit in quantity', () => {
    const input = `12 imported box of chocolates at 10.00`;
    const output = [{
      category: 'food',
      imported: true,
      price: 10.00,
      product: 'box of chocolates',
      quantity: 12,
      taxes: 0,
      total: 120.00,
    }];

    it('parses the input correctly', () => {
      const result = inputParser(input);
      expect(result).toEqual(output);
    });
  });
});
