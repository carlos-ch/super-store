import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinks = styled.ul`
  display: flex;
  font-size: 1.2rem;
  color: white;
  li {
    margin-right: 1.5rem;
  }
`;

const links = [
  { name: 'home', path: '/' },
  { name: 'deals', path: '/deals' },
  { name: 'cart', path: '/cart' },
];

const Links = () => {
  return (
    <StyledLinks>
      {links.map(link => (
        <Link to={link.path}>
          <li>{link.name}</li>
        </Link>
      ))}
    </StyledLinks>
  );
};

export default Links;
