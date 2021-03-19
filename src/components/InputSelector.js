import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../styles/button';

const StyledButton = styled(Button)`
  && {
    align-self: center;
  }
`;

const InputSelector = ({ data, handleAddToCart, itemCount, setItemCount }) => {

  const handleInputChange = e => {
    const parsedInt = parseInt(e.target.value) || 0;
    setItemCount(parsedInt);
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
