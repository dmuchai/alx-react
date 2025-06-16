import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const notifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: {}
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications
    };
    const state = notificationReducer(undefined, action);

    expect(state.get('notifications').toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
  });

  it('should handle MARK_AS_READ', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications
    };
    let state = notificationReducer(undefined, fetchAction);
    const markAction = {
      type: MARK_AS_READ,
      index: 2
    };
    state = notificationReducer(state, markAction);

    expect(state.getIn(['notifications', '2', 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const state = notificationReducer(undefined, action);
    expect(state.get('filter')).toBe('URGENT');
  });
});
