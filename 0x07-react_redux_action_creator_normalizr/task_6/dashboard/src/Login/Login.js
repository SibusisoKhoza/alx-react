import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  render() {
    return (
      <div className={css(styles.body)}>
        <div>
          <p>Login to access the full dashboard</p>
        </div>
        <form className={css(styles.inputSection)} onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.entry)}>
            <label htmlFor="email">Email: </label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className={css(styles.input)} 
              required 
              onChange={this.handleInputChange} 
            />
          </div>

          <div className={css(styles.entry)}>
            <label htmlFor="password">Password: </label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className={css(styles.input)} 
              required 
              onChange={this.handleInputChange} 
            />
          </div>

          <input type="submit" value="OK" className={css(styles.button)} />
        </form>
      </div>
    );
  }
}

const screenSize = {
  nineHundredPixel: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  body: {
    padding: '45px',
    minHeight: '250px',
  },
  input: {
    marginRight: '10px',
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'row',
    [screenSize.nineHundredPixel]: {
      flexDirection: 'column',
    },
  },
  entry: {
    [screenSize.nineHundredPixel]: {
      marginBottom: '5px',
    },
  },
  button: {
    [screenSize.nineHundredPixel]: {
      maxWidth: '50px',
    },
  },
});

export default Login;
