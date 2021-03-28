import React from "react";
import styled from "styled-components";
import Button from "../../styles/button";
import SearchBar from "../SearchBar";
import searchIcon from "../../assets/svg/search.svg";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  background-color: #eee;
  .icon {
    width: 20px;
    margin: -2px;
  }
`;

const icon = <img className="icon" src={searchIcon} alt="search"></img>;

const SearchField = () => {
  return (
    <StyledForm>
      <SearchBar></SearchBar>
      <Button>{icon}</Button>
    </StyledForm>
  );
};

export default SearchField;
