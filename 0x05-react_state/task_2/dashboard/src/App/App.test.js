import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component when user is not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('contains the CourseList component when user is logged in', () => {
    const wrapper = mount(<App />);
    
    // Set App internal state to logged in
    wrapper.setState({
      user: {
        email: 'test@example.com',
        password: '123',
        isLoggedIn: true,
      }
    });
    wrapper.update();

    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('calls logOut and alerts when Ctrl+H is pressed', () => {
    // Mock alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Mount app and set logged in state
    const wrapper = mount(<App />);
    wrapper.setState({
      user: {
        email: 'test@example.com',
        password: '123',
        isLoggedIn: true,
      }
    });
    wrapper.update();

    // Dispatch Ctrl+H event
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    
    // Optionally check if user is logged out after event
    expect(wrapper.state('user').isLoggedIn).toBe(false);

    alertMock.mockRestore();
  });
});
