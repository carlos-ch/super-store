import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffd19b;
  width: fit-content;
  padding: 0.5rem 2rem;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #000;
    background-color: #ecb87b;
    border-color: #d29f62;
  }
  &:focus {
    outline: none;
    text-decoration: none;
  }
`;

export default Button;
