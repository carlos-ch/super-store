import React from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import mockData from '../db/mock_data.json';

const StyledContainer = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const firstPage = mockData.items.slice(0, 6);

const Home = () => {
  return (
    <StyledContainer>
      <ItemList data={firstPage} />
    </StyledContainer>
  );
};

export default Home;
