import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer component', () => {
  it('renders without crashing', () => {
    mount(<Footer />);
  });

  it('does not show Contact us link when user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('shows Contact us link when user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});
