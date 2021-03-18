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
  const [productsData, setProductsData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        setMessage('Loading...');
        const response = await axios.get(API_BASE_URL + itemId);
        setIsFetching(false);
        setProductsData([response.data]);
      } catch (e) {
        console.log(e);
        setMessage("Couldn't find item");
        setIsFetching(false);
        setProductsData(productsData);
      }
    };
    fetchData();
  }, []);
  // console.log(itemId, data, isFetching);

  return (
    <StyledContainer>
      {isFetching ? (
        <h3 className="message">{message}</h3>
      ) : productsData?.length > 0 ? (
        <Product data={productsData[0]}></Product>
      ) : (
        <h3 className="message">{message}</h3>
      )}
    </StyledContainer>
  );
};

export default ProductPage;
