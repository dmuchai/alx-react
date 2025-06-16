import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header component', () => {
  it('renders without crashing', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1 tags', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not render logoutSection when user is not logged in', () => {
    const contextValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when user is logged in', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        password: '1234',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('calls logOut function when clicking logout link', () => {
    const logOutMock = jest.fn();

    const contextValue = {
      user: {
        email: 'test@example.com',
        password: '1234',
        isLoggedIn: true,
      },
      logOut: logOutMock,
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutMock).toHaveBeenCalled();
  });
});
