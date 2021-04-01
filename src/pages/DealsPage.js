import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import axios from 'axios';

// import mockData from '../db/mock_data.json';

const API_URL =
  'https://gp-super-store-api.herokuapp.com/item/list?size=6&sortDir=asc&isOnSale=true';

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
// const productsOnSale = mockData.items.filter(item => item.isOnSale);
// const data = { products: productsOnSale };

const DealsPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await axios.get(API_URL);
        setIsFetching(false);

        setProductsData(response.data.items);
      } catch (e) {
        console.log(e);
        setIsFetching(false);

        setProductsData(productsData);
      }
    };
    fetchData();
  }, []);
  return (
    <StyledContainer>
      {productsData && productsData.length > 0 ? (
        <ItemList data={productsData} />
      ) : (
        <h3 className="feedback">
          {isFetching
            ? 'Loading...'
            : "Couldn't find any deals" + <span>{'\u{1F614}'}</span>}
        </h3>
      )}
    </StyledContainer>
  );
};

export default DealsPage;
