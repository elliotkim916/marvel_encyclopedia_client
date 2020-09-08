import React from 'react';
import './Loading.module.css';

const Loading = ({ loadingMessage }) => {
  return (
    <React.Fragment>
      <h3 className="loading_message">{loadingMessage}</h3>
      <div className="spinner"></div>
    </React.Fragment>
  );
};

export default Loading;
