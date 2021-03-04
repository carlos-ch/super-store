import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../styles/button';
import { CartContext } from '../contexts/CartContext';
import { validateStock } from '../utils/cartUtils';

const StyledButton = styled(Button)`
  && {
    align-self: center;
  }
`;

const InputSelector = ({ data, setLowStock, setAlreadyInCart }) => {
  const productId = data._id;
  const [contextValue, setContext] = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const handleInputChange = e => {
    const parsedInt = parseInt(e.target.value) || 0;
    setItemCount(parsedInt);
  };
  useEffect(() => {
    // resets item count to display
    setAlreadyInCart(0);

    const itemInCart = contextValue.filter(i => i.id === productId);
    console.log({ contextValue, itemInCart });
    if (itemInCart.length > 0) {
      setAlreadyInCart(itemInCart[0].count);
    }
    // return () => {
    // setAlreadyInCart(0);
    // };
  }, [contextValue, setAlreadyInCart, productId]);

  useEffect(() => {
    const sufficientStock = validateStock(itemCount, data);
    console.log({ sufficientStock });
    if (!sufficientStock) {
      setLowStock(true);
    }
    return () => {
      setLowStock(false);
      /* reset quantity input ? */
      // setItemCount(0);
    };
  }, [itemCount, data, setLowStock]);

  // add product {id , and number} to cart
  const handleAddToCart = () => {
    let updatedCart = [];
    setContext(oldCart => {
      const productIndex = oldCart.findIndex(i => i.id === productId);
      /* if item is already in cart */
      if (productIndex !== -1) {
        updatedCart = [
          ...oldCart.slice(0, productIndex),
          { id: productId, count: oldCart[productIndex].count + itemCount },
          ...oldCart.slice(productIndex + 1),
        ];
      } else {
        /* if item is new to cart */
        updatedCart = [...oldCart, { id: productId, count: itemCount }];
      }
      return updatedCart;
    });
  };

  return (
    <div>
      <div className="quantity-count">
        <p>Quantity:</p>
        <input
          onChange={handleInputChange}
          type="number"
          min="0"
          max={data.stockCount}
          value={itemCount}
        />
      </div>
      <StyledButton className="btn-add" onClick={handleAddToCart}>
        Add to cart
      </StyledButton>
    </div>
  );
};

export default InputSelector;
