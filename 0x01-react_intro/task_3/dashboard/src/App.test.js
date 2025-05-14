import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  it('renders a div with class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  it('renders a div with class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
