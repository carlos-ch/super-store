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
    background: white;
    width: 80%;
    height: 85vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Modal = ({ children, show, handleClose }) => {
  return (
    <StyledModal show={show}>
      <section className="modal-section">
        <button onClick={handleClose}>Close</button>

        {children}
      </section>
    </StyledModal>
  );
};

export default Modal;
