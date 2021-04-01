import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import styled from 'styled-components';
import ContentWrapper from '../styles/contentWrapper';
import axios from 'axios';
import SearchField from '../components/Search/SearchField';
import Pagination from '../components/Pagination/Pagination';
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
  const [totalItems, setTotalItems] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [search, setSearch] = useState('');
  const [fromItem, setFromItem] = useState('');
  const [page, setPage] = useState(0);

  const onSearch = query => {
    console.log({ query });
    onPageChange(0);
    setSearch(`&q=${query}`);
  };

  const onPageChange = pageNum => {
    console.log({ pageNum });
    // check if already in last page
    if (pageNum * 6 >= totalItems && !hasMore) return;
    setPage(pageNum);
    setFromItem(`&from=${pageNum * 6}`);
  };

  useEffect(() => {
    const queryParams = search + fromItem;
    const fetchData = async () => {
      try {
        setIsFetching(true);
        let response;
        if (queryParams) {
          response = await axios.get(API_URL + queryParams);
        } else {
          response = await axios.get(API_URL);
        }
        setIsFetching(false);

        setTotalItems(response.data.total);
        setHasMore(response.data.hasMore);
        setProductsData(response.data.items);
      } catch (e) {
        setIsFetching(false);

        setProductsData(productsData);
      }
    };
    fetchData();
  }, [search, fromItem]);
  console.log({ productsData });

  return (
    <StyledContainer>
      <SearchField onSearch={onSearch} />
      {isFetching ? (
        <h3 className="message">Loading...</h3>
      ) : productsData.length > 0 ? (
        <ItemList data={productsData} />
      ) : (
        <h3 className="feedback">
          Couldn't find this item <span>{'\u{1F614}'}</span>
        </h3>
      )}
      <Pagination
        onPageChange={onPageChange}
        currentPage={page}
        totalItems={totalItems}
      />
    </StyledContainer>
  );
};

export default DealsPage;
