import React, { useState } from 'react';
import styled from 'styled-components';
import Rating from '../components/Rating';
import Badge from '../styles/badge';
import Banner from '../styles/banner';
import InputSelector from './InputSelector';

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
  // const productId = data._id;
  const [alreadyInCart, setAlreadyInCart] = useState(0);
  const [lowStock, setLowStock] = useState(false);

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
          setAlreadyInCart={setAlreadyInCart}
          setLowStock={setLowStock}
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
