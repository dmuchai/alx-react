import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('menu item is displayed', () => {
    const wrapper = shallow(<Notifications />);
    const menuItem = wrapper.find('[data-testid="menu-item"]');
    expect(menuItem.exists()).toBe(true);
  });

  it('notifications drawer is not displayed by default', () => {
    const wrapper = shallow(<Notifications />);
    const drawer = wrapper.find('[data-testid="notifications-drawer"]');
    expect(drawer.exists()).toBe(false);
  });

  it('notifications drawer is displayed after clicking menu item', () => {
    const wrapper = shallow(<Notifications />);
    const menuItem = wrapper.find('[data-testid="menu-item"]');
    menuItem.simulate('click');
    wrapper.update(); // update wrapper after state change

    const drawer = wrapper.find('[data-testid="notifications-drawer"]');
    expect(drawer.exists()).toBe(true);
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const wrapper = shallow(<Notifications />);
    // Open the drawer first by simulating menu item click
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    wrapper.update();

    const closeButton = wrapper.find('[data-testid="close-button"]');
    closeButton.simulate('click');
    wrapper.update();

    // After closing, drawer should no longer exist
    const drawer = wrapper.find('[data-testid="notifications-drawer"]');
    expect(drawer.exists()).toBe(false);
  });

  it('renders correct number of NotificationItem when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    // Open the drawer to render NotificationItem list
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    wrapper.update();

    const items = wrapper.find(NotificationItem);
    expect(items).toHaveLength(3);
  });

  it('renders fallback when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    wrapper.update();

    const items = wrapper.find(NotificationItem);
    expect(items).toHaveLength(1);
    expect(items.first().props().value).toBe('No new notification for now');
  });

  it('renders fallback when listNotifications is not passed', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.find('[data-testid="menu-item"]').simulate('click');
    wrapper.update();

    const items = wrapper.find(NotificationItem);
    expect(items).toHaveLength(1);
    expect(items.first().props().value).toBe('No new notification for now');
  });
});
