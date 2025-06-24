import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header'; // import the named component

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header user={null} logout={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1', () => {
    const wrapper = shallow(<Header user={null} logout={() => {}} />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not show logoutSection when user is not logged in', () => {
    const wrapper = shallow(<Header user={null} logout={() => {}} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('shows logoutSection and triggers logout on click', () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(<Header user={{ email: 'test@mail.com' }} logout={mockLogout} />);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
    wrapper.find('#logoutSection span').simulate('click');
    expect(mockLogout).toHaveBeenCalled();
  });
});
