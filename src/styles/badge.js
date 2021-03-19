import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  color: #fff;
  margin-left: 0.5rem;
  // margin-right: 1rem;
  background-color: ${props => (props.sale ? '#dc3545' : 'inherit')};
`;

export default Badge;
