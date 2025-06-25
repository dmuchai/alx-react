import { Map, fromJS } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';

const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
  loading: false
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notifications = {};
      action.data.forEach(notification => {
        notifications[notification.id] = { ...notification, isRead: false };
      });
      return state.set('notifications', fromJS(notifications));

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case SET_LOADING_STATE:
      return state.set('loading', action.loading);

    default:
      return state;
  }
}
