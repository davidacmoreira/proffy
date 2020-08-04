import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Study Platform</h2>
        </div>

        <img
          src={landingImg}
          alt="Study Platform"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </Link>
          
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes" />
            Give Classes
          </Link>
        </div>

        <span className="total-connections">
          Total of xxx connections <img src={purpleHeartIcon} alt="Purple Heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
