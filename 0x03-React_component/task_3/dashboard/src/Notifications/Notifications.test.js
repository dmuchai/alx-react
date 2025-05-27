import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const items = wrapper.find('NotificationItem');
    expect(items).toBeDefined();
  });

  it('menuItem is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('Notifications div is not displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).toHaveLength(0);
  });

  it('menuItem is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.menuItem')).toHaveLength(1);
  });

  it('Notifications div is displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('div.Notifications')).toHaveLength(1);
  });
});

describe('Notifications with listNotifications', () => {
  let latestNotification;
  let listNotifications;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('renders correct number of NotificationItem elements', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const items = wrapper.find('NotificationItem');
    expect(items).toHaveLength(3);
  });

  it('renders correct html content in NotificationItem', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const item = wrapper.find('NotificationItem').at(2);
    expect(item.prop('html')).toEqual({ __html: latestNotification });
  });
});

describe('Notifications without listNotifications or with empty list', () => {
  it('renders default message when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    const items = wrapper.find('NotificationItem');
    expect(items).toHaveLength(1);
    expect(items.html()).toContain('No new notification for now');
  });

  it('renders default message when listNotifications is not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const items = wrapper.find('NotificationItem');
    expect(items).toHaveLength(1);
    expect(items.html()).toContain('No new notification for now');
  });
});
