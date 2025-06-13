import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('contains Login component when user is not logged in', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ user: { isLoggedIn: false } });
    wrapper.update();
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('contains CourseList component when user is logged in', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    wrapper.update();
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('markNotificationAsRead removes notification by id', () => {
    const wrapper = mount(<App />);
    // Initially 3 notifications
    expect(wrapper.state('listNotifications').length).toBe(3);
    wrapper.instance().markNotificationAsRead(2);
    wrapper.update();
    // After removing id 2, length should be 2
    expect(wrapper.state('listNotifications').length).toBe(2);
    // Notification with id 2 should be gone
    expect(wrapper.state('listNotifications').some(n => n.id === 2)).toBe(false);
  });
});
