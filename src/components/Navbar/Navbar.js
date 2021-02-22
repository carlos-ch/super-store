import React from 'react';
import styled from 'styled-components';
import ContentWrapper from '../../styles/contentWrapper';
import Logo from '../Logo';
import Links from './Links';

const StyledNavWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: midnightblue;
`;

const Navbar = () => {
  return (
    <StyledNavWrapper>
      <Logo size="2rem" className="logo">
        Super Store
      </Logo>
      <Links />
    </StyledNavWrapper>
  );
};

export default Navbar;
