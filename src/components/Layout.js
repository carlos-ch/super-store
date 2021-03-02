import React from 'react';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Navbar />
      <main>{children}</main>
    </StyledLayoutWrapper>
  );
};

export default Layout;
