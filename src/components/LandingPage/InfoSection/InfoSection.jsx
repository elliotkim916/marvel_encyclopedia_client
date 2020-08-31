import React from 'react';
import { Link } from 'react-router-dom';
import avengers_icon from '../../../images/avengers_icon.png';
import captainAmerica_icon from '../../../images/captainAmerica_icon.png';
import captainmarvel_icon from '../../../images/captainmarvel_icon.png';
import InfoBlock from './InfoBlock';
import './InfoSection.module.css';

const InfoSection = () => {
  return (
    <section className="information-section">
      <div className="info title">
        <header className="info-section-header">
          <h1 className="marvel-title-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png"
              alt="Marvel Encyclopedia"
              className="marvel-logo-one"
            />
            <div className="header-second-word">ENCYCLOPEDIA</div>
          </h1>
          <h2 className="landing-pg-header">
            Your source for all things Marvel.
          </h2>

          <Link to="/register">
            <button className="sign-up-button">SIGN UP HERE</button>
          </Link>
        </header>
      </div>

      <InfoBlock
        imgSrc={avengers_icon}
        text="Marvel Encyclopedia allows you to go deep and learn about any Marvel
          Comics character with biographies, pictures, & issues of comic books
          the character was in."
      />
      <InfoBlock
        imgSrc={captainAmerica_icon}
        text="With every character search result, you can save the comics you want
          to read in the future & save the comics you have already read to your
          profile page."
      />
      <InfoBlock
        imgSrc={captainmarvel_icon}
        text="Click on a comic or an event to learn more about the story, to see the
        characters that were involved, and see which comic book issues tie in
        with that particular event."
      />
    </section>
  );
};

export default InfoSection;
