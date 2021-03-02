import React from 'react';
import styled from 'styled-components';
import Button from '../../styles/button';
import Rating from '../Rating';

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 20px);
  flex-grow: 1;
  justify-content: flex-end;
  padding: 1.5rem 2.4rem;
  background-color: whitesmoke;
  background: linear-gradient(
    0deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  .product-img {
    width: 100%;
  }
  .price p {
    font-weight: 700;
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
    background-color: #dc3545;
  }
`;

const StyledButton = styled(Button)`
  && {
    align-self: center;
  }
`;

const Card = ({ item, handleOpen }) => {
  return (
    <StyledCard>
      {/* {children} */}
      <figure className="product-img">
        <img src={item.imageUrl} alt={item.name} />
      </figure>
      <p>{item.name}</p>

      {/* <div className="rate">rating</div> */}
      <Rating rateScore={item.avgRating} count={item.stockCount} />
      <div className="price">
        <p>
          ${item.price}
          {item.isOnSale && <span className="badge badge-sale">On sale</span>}
        </p>
      </div>
      <StyledButton className="btn-cta" onClick={() => handleOpen(item)}>
        View Item
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
