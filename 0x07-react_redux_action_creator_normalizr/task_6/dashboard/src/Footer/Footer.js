import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import './Footer.css';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </footer>
  );
};

export default Footer;
