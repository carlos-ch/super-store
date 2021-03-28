import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import styled from "styled-components";
import ContentWrapper from "../styles/contentWrapper";
// import mockData from '../db/mock_data.json';
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchField from "../components/Search/SearchField";

const API_URL =
  "https://gp-super-store-api.herokuapp.com/item/list?size=6&sortDir=asc";

const StyledContainer = styled(ContentWrapper)`
  && {
    align-items: center;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
/* use this to feed with mockData */
// const data = { products: mockData.items.slice(0, 6) };

const Home = () => {
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
        setIsFetching(false);

        setProductsData(productsData);
      }
    };
    fetchData();
  }, []);
  console.log(productsData);
  return (
    <StyledContainer>
      <SearchField></SearchField>
      {isFetching ? (
        <h3 className="message">Loading...</h3>
      ) : (
        <ItemList data={productsData} />
      )}
    </StyledContainer>
  );
};

export default Home;
