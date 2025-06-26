import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
];

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct number of NotificationItem components', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.find('NotificationItem').length).toBe(2);
  });

  it('displays the correct message when there are no notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').prop('value')).toBe('No new notification for now');
  });

  it('displays the correct text when notifications exist', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.find('p').text()).toContain('Here is the list of notifications');
  });

  it('calls setNotificationFilter with URGENT on urgent button click', () => {
    const mockSetFilter = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        setNotificationFilter={mockSetFilter}
      />
    );
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetFilter).toHaveBeenCalledWith('URGENT');
  });

  it('calls setNotificationFilter with DEFAULT on default button click', () => {
    const mockSetFilter = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        setNotificationFilter={mockSetFilter}
      />
    );
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetFilter).toHaveBeenCalledWith('DEFAULT');
  });
});

