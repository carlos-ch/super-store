const getStock = item => item.stockCount;

export const validateStock = (quantity, item) => {
  const inStock = getStock(item);
  return quantity <= inStock;
};
