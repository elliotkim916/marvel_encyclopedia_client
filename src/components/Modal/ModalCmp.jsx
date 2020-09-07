import React from 'react';
import Modal from 'react-modal';
import '../SearchResults/ComicsList/ComicsList.module.css';

Modal.setAppElement('#root');

const ModalCmp = ({ modalState, modalFunction, message, buttonText }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-40%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid black',
    },
  };

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={() => modalFunction(false)}
      style={customStyles}
    >
      <h3>{message}</h3>
      <button
        type="button"
        className="already-read-input"
        onClick={() => modalFunction(false)}
      >
        {buttonText}
      </button>
    </Modal>
  );
};

export default ModalCmp;
