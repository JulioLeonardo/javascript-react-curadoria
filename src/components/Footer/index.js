import React from 'react';

import './styles.css';

import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import pinterest from '../../assets/images/pinterest.svg';
import google from '../../assets/images/google-plus.svg';

function Footer() {
  return (
    <div className="content-wraper">
      <footer className="footer">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={pinterest} alt="pinterest" />
        <img src={google} alt="google-plus" />
      </footer>
    </div>
  );
}

export default Footer;
