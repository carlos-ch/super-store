import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import axios from 'axios';

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
  const [data, setData] = useState({ products: [] });
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        setData({ products: data.products, isFetching: true });
        const response = await axios.get(API_BASE_URL + itemId);
        setIsFetching(false);

        setData({ products: [response.data], isFetching: false });
      } catch (e) {
        console.log(e);
        setIsFetching(false);
        setData({ products: data.products, isFetching: false });
      }
    };
    fetchData();
  }, []);
  console.log(itemId, data);
  return (
    <StyledContainer>
      {data.products && data.products.length > 0 ? (
        itemId
      ) : (
        <h3 className="message">Couldn't find item</h3>
      )}
    </StyledContainer>
  );
};

export default ProductPage;
