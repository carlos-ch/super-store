import styled from 'styled-components';

const Banner = styled.div`
  background-color: ${props =>
    props.type === 'warning' ? '#fff3cd' : 'info' ? '#d1ecf1' : 'none'};
  color: ${props =>
    props.type === 'warning' ? '#856404' : 'info' ? '#0c5460' : 'none'};
  padding: 0.5rem 1.5rem;
  text-align: center;
  margin-top: 1rem;
`;

export default Banner;
