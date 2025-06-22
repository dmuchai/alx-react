import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

const sampleNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' }
];

describe('notificationReducer', () => {
  it('should return initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({ filter: 'DEFAULT', notifications: [] });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: sampleNotifications
    };
    const expected = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expected);
  });

  it('should handle MARK_AS_READ', () => {
    const startState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const newState = notificationReducer(startState, action);
    expect(newState.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const startState = {
      filter: 'DEFAULT',
      notifications: []
    };
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const newState = notificationReducer(startState, action);
    expect(newState.filter).toBe('URGENT');
  });
});
