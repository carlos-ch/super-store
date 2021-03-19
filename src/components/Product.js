import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from '../components/Rating';
import Badge from '../styles/badge';
import Banner from '../styles/banner';
import InputSelector from './InputSelector';
import { CartContext } from '../contexts/CartContext';
import { validateStock } from '../utils/cartUtils';



const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  // flex-basis: calc(50% - 20px);
  // flex-grow: 1;
  justify-content: flex-end;
  padding: 1.5rem 2.4rem;
  margin: 0 auto;
  max-width: 450px;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: center;

    align-items: center;

    max-width: 750px;
    .product-img {
      margin-right: calc(4% + 1rem);
    }
  }
  .product-img {
    width: 100%;
    // max-width: 350px;
    flex-basis: calc(50% - 20px);
    flex-grow: 1;
  }
  .product-details {
    flex-basis: calc(50% - 20px);
    flex-grow: 1;
  }
  .product-name {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .price p {
    font-weight: 700;
  }
  .quantity-count {
    display: flex;
    align-items: center;
    input {
      background-color: #d3d3d3;
      border-radius: 3px;
      height: 2rem;
      margin-left: 0.5rem;
      text-align: center;
      border: none;
    }
  }
`;

const Product = ({ data }) => {
  const productId = data._id;
  const [alreadyInCart, setAlreadyInCart] = useState(0);
  const [lowStock, setLowStock] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  const [contextValue, setContext] = useContext(CartContext);



    // add product {id , and number} to cart
  const handleAddToCart = () => {
    let updatedCart = [];
    setContext(oldCart => {
      const productIndex = oldCart.findIndex(i => i.id === productId);
      /* if item is already in cart */
      if (itemCount === 0 || !validateStock(itemCount, data, contextValue))
        return oldCart;
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
      setItemCount(0);
      return updatedCart;
    });
  };

    useEffect(() => {
    // resets item count to display
    setAlreadyInCart(0);

    const itemInCart = contextValue.filter(i => i.id === productId);
    if (itemInCart.length > 0) {
      setAlreadyInCart(itemInCart[0].count);
    }
  }, [contextValue, setAlreadyInCart, productId]);

    useEffect(() => {
    const sufficientStock = validateStock(itemCount, data, contextValue);
    if (!sufficientStock) {
      setLowStock(true);
    }
    return () => {
      setLowStock(false);
      /* reset quantity input after exit modal/page ? */
      // setItemCount(0);
    };
  }, [itemCount, data, setLowStock, contextValue]);

  return (
    <StyledContainer>
      <figure className="product-img">
        <img src={data.imageUrl} alt={data.name} />
      </figure>
      <div className="product-details">
        <p className="product-name">{data.name}</p>

        <Rating rateScore={data.avgRating} count={data.stockCount} />
        <p className="description">{data.description}</p>
        <div className="price">
          <p>
            ${data.price}
            {data.isOnSale && <Badge sale>On sale</Badge>}
          </p>
        </div>
        <InputSelector
          data={data}
          handleAddToCart={handleAddToCart}
          itemCount={itemCount}
          setItemCount={setItemCount}
        ></InputSelector>
        {lowStock && <Banner type="warning">Insufficient stock!</Banner>}
        {alreadyInCart > 0 && (
          <Banner type="info">
            {alreadyInCart} of this item already in your cart.
          </Banner>
        )}
      </div>
    </StyledContainer>
  );
};

export default Product;
