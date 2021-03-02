import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import mockData from '../db/mock_data.json';
import axios from 'axios';

const API_URL =
  'https://gp-super-store-api.herokuapp.com/item/list?size=6&sortDir=asc';

const StyledContainer = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
/* use this to feed with mockData */
const data = { products: mockData.items.slice(0, 6) };

const Home = () => {
  // const [data, setData] = useState({ products: [], isFetching: false });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setData({ products: data.products, isFetching: true });
  //       const response = await axios.get(API_URL);
  //       setData({ products: response.data.items, isFetching: false });
  //     } catch (e) {
  //       console.log(e);
  //       setData({ products: data.products, isFetching: false });
  //     }
  //   };
  //   fetchData();
  // }, []);
  console.log(data);
  return (
    <StyledContainer>
      <ItemList data={data.products} />
    </StyledContainer>
  );
};

export default Home;
