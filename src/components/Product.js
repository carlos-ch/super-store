import React, { useState } from 'react';
import ContentWrapper from '../styles/contentWrapper';
import styled from 'styled-components';
import Rating from '../components/Rating';
import Button from '../styles/button';

// const StyledContainer = styled(ContentWrapper)`
//   && {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
// `;

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  // flex-basis: calc(50% - 20px);
  // flex-grow: 1;
  justify-content: flex-end;
  padding: 1.5rem 2.4rem;
  margin: 0 auto;
  max-width: 450px;
  // background-color: whitesmoke;
  // background: linear-gradient(
  //   0deg,
  //   rgba(245, 245, 245, 1) 0%,
  //   rgba(255, 255, 255, 1) 100%
  // );
  // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14);
  // border-radius: 5px;

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

  .badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }
  .badge-sale {
    color: #fff;
    margin-left: 0.5rem;
    // margin-right: 1rem;
    background-color: #dc3545;
  }
`;

const StyledButton = styled(Button)`
  && {
    align-self: center;
  }
`;

const Product = ({ data }) => {
  const [message, setMessage] = useState(true);
  console.log(data);

  return (
    <StyledContainer>
      {/* {children} */}
      <figure className="product-img">
        <img src={data.imageUrl} alt={data.name} />
      </figure>
      <div className="product-details">
        <p className="product-name">{data.name}</p>

        {/* <div className="rate">rating</div> */}
        <Rating rateScore={data.avgRating} count={data.stockCount} />
        <p className="description">{data.description}</p>
        <div className="price">
          <p>
            ${data.price}
            {data.isOnSale && <span className="badge badge-sale">On sale</span>}
          </p>
        </div>
        <div className="quantity-count">
          <p>Quantity:</p>
          <input type="number" min="1" max="100" />
        </div>
        <StyledButton className="btn-add">Add to cart</StyledButton>
        {message && <div>Message</div>}
      </div>
      {/* <button className="btn-cta" onClick={() => handleOpen(data)}>
        View Item
      </button> */}
    </StyledContainer>
  );
};

export default Product;
