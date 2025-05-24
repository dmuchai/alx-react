import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
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

  it('CourseList is not displayed when not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('CourseList is displayed and Login is hidden when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('calls logOut and alerts when Ctrl + h is pressed', () => {
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App logOut={mockLogOut} />);
    
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(mockAlert).toHaveBeenCalledWith('Logging you out');
    expect(mockLogOut).toHaveBeenCalled();

    mockAlert.mockRestore();
    wrapper.unmount();
  });
});
