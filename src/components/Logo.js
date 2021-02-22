import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;
  color: white;
  font-weight: 900;
  font-size: ${({ size }) => (size ? size : '1.75rem')};
`;

const Logo = ({ children }) => {
  return <StyledLogo>{children}</StyledLogo>;
};

export default Logo;
