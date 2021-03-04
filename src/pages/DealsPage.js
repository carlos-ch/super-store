import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import axios from 'axios';

import mockData from '../db/mock_data.json';

const API_URL =
  'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc&isOnSale=true';

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

/* use this to feed with mockData */
const productsOnSale = mockData.items.filter(item => item.isOnSale);
const data = { products: productsOnSale };

const DealsPage = () => {
  // const [data, setData] = useState({ products: [] });
  // const [isFetching, setIsFetching] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsFetching(true);
  //       setData({ products: data.products });
  //       const response = await axios.get(API_URL);
  //       setIsFetching(false);

  //       setData({ products: response.data.items });
  //     } catch (e) {
  //       console.log(e);
  //       setIsFetching(false);

  //       setData({ products: data.products });
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <StyledContainer>
      {data.products && data.products.length > 0 ? (
        <ItemList data={data.products} />
      ) : (
        <h3 className="feedback">
          Couldn't find any deals <span>{'\u{1F614}'}</span>{' '}
        </h3>
      )}
    </StyledContainer>
  );
};

export default DealsPage;
