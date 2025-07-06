const printer = (items, taxes, total) => {
  const lines = items.map(item => {
    return `${item.quantity}${item.imported ? ' imported' : ''} ${item.product}: ${item.total.toFixed(2)}`;
  });

  lines.push(`Sales Taxes: ${taxes.toFixed(2)}`);
  lines.push(`Total: ${total.toFixed(2)}`);

  return lines.join('\n');
};

module.exports = printer;
