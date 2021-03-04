import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'block' : 'none')};
  .modal-section {
    position: fixed;
    background: whitesmoke;
    width: 80%;
    height: 85vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
  }
  .btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
`;

const Modal = ({ children, show, handleClose }) => {
  return (
    <StyledModal show={show}>
      <button className="btn-close" onClick={handleClose}>
        Close
      </button>
      <section className="modal-section">{children}</section>
    </StyledModal>
  );
};

export default Modal;
