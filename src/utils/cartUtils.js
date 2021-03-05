const getStock = item => item.stockCount;

export const validateStock = (quantity, item, cart) => {
  const inStock = getStock(item);
  const thisItemInCart = cart.filter(i => i.id === item._id)[0]?.count || 0;
  return quantity + thisItemInCart <= inStock;
};
