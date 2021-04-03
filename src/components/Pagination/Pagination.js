import React from 'react';
import styled from 'styled-components';
import Button from '../../styles/button';

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  // max-width: 100%;
  grid-gap: 1rem;
  padding: 1rem 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;
  background-color: #eee;

  @media (max-width: 560px) {
    font-size: 85%;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
  &:hover {
  }
  &:hover,
  &:active {
    &:not([disabled]) {
      color: #fff;
      background-color: #138496;
      border-color: #117a8b;
    }
  }
`;

const Pagination = ({ onPageChange, currentPage, totalItems, pgSize }) => {
  const totalPages = Math.floor(totalItems / pgSize);

  const handleFirstPage = () => {
    onPageChange(0);
  };
  const handlePrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 0));
  };
  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const handleLastPage = () => {
    onPageChange(totalPages);
  };
  console.log({ currentPage, totalPages });
  return (
    <StyledButtonWrapper>
      <StyledButton
        className="btn--page"
        onClick={handleFirstPage}
        disabled={currentPage === 0}
      >
        First
      </StyledButton>
      <StyledButton
        className="btn--page"
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        Prev
      </StyledButton>
      <span>
        {currentPage + 1} / {totalPages + 1}
      </span>
      <StyledButton
        className="btn--page"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </StyledButton>
      <StyledButton
        className="btn--page"
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default Pagination;
