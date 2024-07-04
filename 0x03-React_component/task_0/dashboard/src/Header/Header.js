import React from 'react';
import holbertonLogo from '../assets/holberton-logo.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={holbertonLogo} className="App-logo" alt="Holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
};

export default Header;