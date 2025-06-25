import { Map } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notificationSelector', () => {
  const state = Map({
    filter: 'URGENT',
    notifications: Map({
      1: { id: 1, type: 'default', value: 'Test 1', isRead: false },
      2: { id: 2, type: 'urgent', value: 'Test 2', isRead: true },
      3: { id: 3, type: 'urgent', value: 'Test 3', isRead: false },
    }),
  });

  it('filterTypeSelected returns filter', () => {
    const selected = filterTypeSelected(state);
    expect(selected).toEqual('URGENT');
  });

  it('getNotifications returns all notifications', () => {
    const notifs = getNotifications(state);
    expect(notifs.size).toBe(3);
    expect(notifs.get('1')).toEqual({
      id: 1,
      type: 'default',
      value: 'Test 1',
      isRead: false,
    });
  });

  it('getUnreadNotifications returns only unread notifications', () => {
    const unread = getUnreadNotifications(state);
    expect(unread.size).toBe(2);
    expect(unread.has('1')).toBe(true);
    expect(unread.has('3')).toBe(true);
    expect(unread.has('2')).toBe(false);
  });
});
