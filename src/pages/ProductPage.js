import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import axios from 'axios';
import Product from '../components/Product';

const API_BASE_URL = 'https://gp-super-store-api.herokuapp.com/item/';

const StyledContainer = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProductPage = () => {
  let itemId = useParams().id;
  const [data, setData] = useState({ products: [], isFetching: false });
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setMessage('Loading...');
        setData({ products: data.products, isFetching: true });
        const response = await axios.get(API_BASE_URL + itemId);
        setData({ products: [response.data], isFetching: false });
      } catch (e) {
        console.log(e);
        setMessage("Couldn't find item");
        setData({ products: data.products, isFetching: false });
      }
    };
    fetchData();
  }, []);
  console.log(itemId, data);
  return (
    <StyledContainer>
      {data.isFetching ? (
        <h3 className="message">{message}</h3>
      ) : data?.products.length > 0 ? (
        <Product data={data.products[0]}></Product>
      ) : (
        <h3 className="message">{message}</h3>
      )}
    </StyledContainer>
  );
};

export default ProductPage;
