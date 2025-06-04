import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password); // ✅ Call passed-down logIn function
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState(
      { email },
      () => this.setState({ enableSubmit: this.state.email !== '' && this.state.password !== '' })
    );
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState(
      { password },
      () => this.setState({ enableSubmit: this.state.email !== '' && this.state.password !== '' })
    );
  }

  render() {
    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)}
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            className={css(styles.input)}
          />

          <input
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
            className={css(styles.button)}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

const styles = StyleSheet.create({
  login: {
    padding: '2rem',
  },
  input: {
    margin: '0 10px 0 10px',
  },
  button: {
    marginLeft: '10px',
  },
});

export default Login;
