import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login /> controlled form', () => {
  it('Submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitBtn = wrapper.find('input[type="submit"]');
    expect(submitBtn.prop('disabled')).toBe(true);
  });

  it('Submit button is enabled when email and password are not empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@email.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: '123456' } });
    const submitBtn = wrapper.find('input[type="submit"]');
    expect(submitBtn.prop('disabled')).toBe(false);
  });
});
