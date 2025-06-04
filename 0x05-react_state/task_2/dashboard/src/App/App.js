import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext, { defaultUser, logOut } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { user } = this.state;
    return (
      <AppContext.Provider value={{ user: user, logOut: this.logOut }}>
        <>
          <Notifications />
          <Header />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
