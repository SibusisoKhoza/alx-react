import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils.js';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
};

export default Footer;