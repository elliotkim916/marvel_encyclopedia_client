import React from 'react';
import './InfoSection.module.css';

const InfoBlock = React.memo(({ imgSrc, text }) => {
  return (
    <div className="info explain">
      <img src={imgSrc} alt="" />
      <p className="info-section-text">{text}</p>
    </div>
  );
});

export default InfoBlock;
