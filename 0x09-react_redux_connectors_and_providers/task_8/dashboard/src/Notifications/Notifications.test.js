import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';

const mockSetNotificationFilter = jest.fn();
const mockFetchNotifications = jest.fn();

const notifications = [
  { id: '1', type: 'default', value: 'New course available', isRead: false },
  { id: '2', type: 'urgent', value: 'New resume available', isRead: false },
  { id: '3', type: 'urgent', value: 'New data available', isRead: true },
];

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={notifications}
        fetchNotifications={mockFetchNotifications}
        setNotificationFilter={mockSetNotificationFilter}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(2); // 2 unread
  });

  it('calls fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('clicking ‼️ sets filter to URGENT', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('URGENT');
  });

  it('clicking 💠 sets filter to DEFAULT', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('DEFAULT');
  });
});
