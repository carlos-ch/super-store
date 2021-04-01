import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../styles/button';
import SearchBar from '../SearchBar';
import searchIcon from '../../assets/svg/search.svg';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  // max-width: 100%;
  margin-bottom: 2rem;
  background-color: #eee;
  .icon {
    width: 20px;
    margin: -2px;
  }
`;

const icon = <img className="icon" src={searchIcon} alt="search"></img>;

const SearchField = ({ onSearch }) => {
  const [input, setInput] = useState('');
  console.log({ input });
  const handlerSubmit = e => {
    e.preventDefault();
    onSearch(input);
    // setSearch(input);
  };

  return (
    <StyledForm onSubmit={e => handlerSubmit(e)}>
      <SearchBar
        onSearch={onSearch}
        onInput={e => setInput(e.target.value)}
      ></SearchBar>
      <Button>{icon}</Button>
    </StyledForm>
  );
};

export default SearchField;
