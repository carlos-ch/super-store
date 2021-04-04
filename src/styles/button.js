import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffd19b;
  width: fit-content;
  padding: 0.5rem 2rem;
  border: 1px solid transparent;
  border-radius: 3px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    text-decoration: none;
  }
  &[disabled] {
    opacity: 0.6;
  }
  &:hover,
  &:active {
    &:not([disabled]) {
      cursor: pointer;
      color: #000;
      background-color: #ecb87b;
      border-color: #d29f62;
    }
  }
`;

export default Button;
