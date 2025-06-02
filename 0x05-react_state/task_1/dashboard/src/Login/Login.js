import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email }, this.updateEnableSubmit);
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState({ password }, this.updateEnableSubmit);
  }

  updateEnableSubmit = () => {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <main role="main" className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChangePassword}
          />

          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </main>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    padding: '2rem',
  },
});

export default Login;
