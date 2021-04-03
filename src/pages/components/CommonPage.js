import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ItemList from '../../components/ItemList';
import Pagination from '../../components/Pagination/Pagination';
import SearchField from '../../components/Search/SearchField';
import ContentWrapper from '../../styles/contentWrapper';
import fetchItemList from '../../utils/api';
import { pageSize } from '../../utils/constants';

// // import mockData from '../db/mock_data.json';

const StyledContainer = styled(ContentWrapper)`
  && {
    display: flex;
    align-items: center;
    flex-direction: column;
    // justify-content: space-between;
    width: 100%;
    height: 100%;
  }
`;
/* use this to feed with mockData */
// const data = { products: mockData.items.slice(0, 6) };

const CommonPage = ({ isDealsPage }) => {
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
    setSearch(query);
  };

  const onPageChange = pageNum => {
    console.log({ pageNum });
    // check if already in last page
    if (pageNum * pageSize >= totalItems && !hasMore) return;
    setPage(pageNum);
    setFromItem(pageNum * pageSize);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);

        const queryParams = {
          size: pageSize,
          from: fromItem,
          q: search,
          sortDir: 'asc',
          isOnSale: isDealsPage,
        };
        const response = await fetchItemList(queryParams);
        console.log(response);

        setIsFetching(false);

        setTotalItems(response.total);
        setHasMore(response.hasMore);
        setProductsData(response.items);
      } catch (e) {
        setIsFetching(false);

        setProductsData(productsData);
      }
    };
    fetchData();
  }, [search, fromItem]);
  console.log(productsData);

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

export default CommonPage;
