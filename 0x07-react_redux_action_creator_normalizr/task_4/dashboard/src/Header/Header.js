import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.png';
import { AppContext } from '../App/AppContext.js';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.header)}>
        <img src={holbertonLogo} className={css(styles.img)} alt="Holberton logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email} (<span onClick={logOut} className={css(styles.logoutLink)}>logout</span>)
          </div>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    borderBottom: '2px solid red',
    color: 'red',
    alignItems: 'center',
  },
  img: {
    height: '180px',
    margin: '5px',
  },
  logoutSection: {
    marginLeft: 'auto',
    marginRight: '10px',
    fontSize: '1rem',
  },
  logoutLink: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export default Header;
