import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: #253034;
  border-radius: 3px;
  border: none;
  height: 1.8rem;
  padding: 1rem 0.5rem;
  margin: 0.5rem 0;
  &:focus {
    border: 0.5px solid #d4cbcb;
    outline: none;
  }
`;

const SearchBar = () => <StyledInput placeholder="Search" />;

export default SearchBar;
