import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });

  // ✅ NEW TEST: Initial state and handleDisplayDrawer
  it('should have displayDrawer false by default and true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  // ✅ NEW TEST: handleHideDrawer sets displayDrawer to false
  it('should set displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // First open it
    expect(wrapper.state('displayDrawer')).toBe(true);
    wrapper.instance().handleHideDrawer(); // Then close it
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
