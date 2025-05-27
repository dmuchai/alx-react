import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders html prop', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    expect(li.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });

  it('calls markAsRead with correct ID when clicked', () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem
        id={5}
        type="default"
        value="Test notification"
        markAsRead={mockMarkAsRead}
      />
    );
    wrapper.find('li').simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith(5);
  });
});
