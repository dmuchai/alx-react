import React from 'react';
import { mount } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    mount(<Notifications />);
  });

  it('calls markNotificationAsRead when NotificationItem markAsRead is called', () => {
    const mockMarkAsRead = jest.fn();
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const wrapper = mount(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={mockMarkAsRead}
      />
    );

    // Trigger markAsRead of first NotificationItem
    wrapper.find('NotificationItem').at(0).prop('markAsRead')();

    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
