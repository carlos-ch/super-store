import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinks = styled.ul`
  display: flex;
  font-size: 1.2rem;
  color: white;
  li {
    margin-right: 1.5rem;
    text-transform: capitalize;
  }
  .selected {
    li {
      border-bottom: 1.5px solid white;
      color: #e1e1e1;
    }
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
      {links.map((link, index) => (
        <NavLink exact key={index} to={link.path} activeClassName="selected">
          <li>{link.name}</li>
        </NavLink>
      ))}
    </StyledLinks>
  );
};

export default Links;
