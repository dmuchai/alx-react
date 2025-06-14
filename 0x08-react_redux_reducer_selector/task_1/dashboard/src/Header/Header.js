import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>

        {/* Only show this section if user is logged in */}
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a href="#" onClick={logOut}>
              logout
            </a>
            )
          </section>
        )}
      </>
    );
  }
}

export default Header;
