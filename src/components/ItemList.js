import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from '../styles/contentWrapper';
import Card from './Card/Card';
import styled from 'styled-components';
import Modal from './Modal';
import Product from './Product';

const StyledContainer = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    max-width: 960px;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 1.5rem;
    justify-content: center;
    justify-items: center;
    align-items: stretch;
  }
`;

const data = [
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 3.5,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 0.5,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 4.5,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 0,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 0,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
  {
    isOnSale: false,
    stockCount: 2,
    _id: '5fbfff7d58aa65167efb52b9',
    name: 'Bag Pipes',
    description: "Your mom won't be able to wait to hear you practice!",
    price: 120,
    avgRating: 0,
    imageUrl:
      'https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg',
  },
];

const ItemList = ({ data }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = product => {
    setActive(product);
    setShow(true);
  };
  console.log(active);
  return (
    <StyledContainer>
      <Modal show={show} handleClose={handleClose}>
        {active && <Product data={active} />}
      </Modal>
      {data.map((item, index) => {
        return (
          <Card
            item={item}
            key={item._id + index}
            handleOpen={handleOpen}
          ></Card>
        );
      })}
    </StyledContainer>
  );
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      isOnSale: PropTypes.bool.isRequired,
      stockCount: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      avgRating: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ItemList;
