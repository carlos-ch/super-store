import React from 'react';
import styled from 'styled-components';

import fullStarImg from '../assets/svg/star2.svg';
import halfStarImg from '../assets/svg/half-star2.svg';
import emptyStarImg from '../assets/svg/empty-star.svg';

const StyleRatingWrapper = styled.div`
  display: flex;
  background-color: whitesmoke;
  .count {
    margin-left: 0.5rem;
  }
`;

const StyledStar = styled.div`
  width: 20px;
  height: 20px;
  background-size: cover;
  background-image: url(${props => props.url});
`;

const starArray = [1, 2, 3, 4, 5];

const Rating = ({ rateScore, count }) => {
  let fillHalfStar = false;
  // for (let index = 0; index < 5; index++) {

  // }
  return (
    <StyleRatingWrapper className="rating-count">
      {starArray.map((_, index) => {
        if (fillHalfStar || rateScore <= index)
          return <StyledStar url={emptyStarImg} />;
        if (rateScore > index) {
          if (rateScore - 0.5 === index) {
            fillHalfStar = true;
            // console.log('half');
            return <StyledStar url={halfStarImg} />;
          }
          // console.log('star');
          return <StyledStar url={fullStarImg} />;
        }
        return <StyledStar url={emptyStarImg} />;
      })}
      <small className="count">{count}</small>
    </StyleRatingWrapper>
  );
};

export default Rating;
