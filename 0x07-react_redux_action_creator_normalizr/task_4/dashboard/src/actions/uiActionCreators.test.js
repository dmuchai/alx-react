import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login(email, password) returns the correct action', () => {
    const email = 'user@example.com';
    const password = 'securepassword';
    const expected = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expected);
  });

  it('logout() returns the correct action', () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it('displayNotificationDrawer() returns the correct action', () => {
    expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('hideNotificationDrawer() returns the correct action', () => {
    expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
