import { Map } from 'immutable';

// Selector: get the filter value from the state
export const filterTypeSelected = (state) => state.get('filter');

// Selector: get all notifications
export const getNotifications = (state) => state.get('notifications');

// Selector: get only unread notifications
export const getUnreadNotifications = (state) => {
  return state.get('notifications').filter((notif) => !notif.isRead);
};
