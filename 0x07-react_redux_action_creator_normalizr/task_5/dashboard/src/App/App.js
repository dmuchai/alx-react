import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext, { defaultUser } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ],
      logOut: this.logOut,
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notif) => notif.id !== id
      ),
    }));
  }

  render() {
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <>
          <Notifications
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}

export default App;
