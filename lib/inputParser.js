const REGEX_TEMPLATE = /^(?<quantity>\d+)(?<imported> imported)? (?<product>.+?) at (?<price>.+)$/;

const CATEGORY_ITEMS = {
  book: ['book', 'books'],
  food: ['chocolate', 'chocolates'],
  medical: ['headache pill', 'headache pills'],
};

const extractProductCategory = (product) => {
  const lowerProduct = product.toLowerCase();

  for (const category in CATEGORY_ITEMS) {
    if (CATEGORY_ITEMS[category].some(item => lowerProduct.includes(item))) {
      return category;
    }
  }

  return 'other'; // Could throw an error if no category is found
};

const inputParser = (input) => {
  const lines = input.trim().split('\n');
  const items = lines.map(line => {
    const groups = line.match(REGEX_TEMPLATE)?.groups;

    if (!groups) throw new Error(`Invalid input line: ${line}`);

    const product = groups.product.trim();
    const quantity = parseInt(groups.quantity, 10);
    const price = parseFloat(groups.price);

    return {
      quantity,
      imported: Boolean(groups.imported),
      product,
      price,
      category: extractProductCategory(groups.product),
      total: quantity * price, // Total price without taxes
      taxes: 0, // Taxes will be calculated later
    };
  });

  return items;
};

module.exports = inputParser;
