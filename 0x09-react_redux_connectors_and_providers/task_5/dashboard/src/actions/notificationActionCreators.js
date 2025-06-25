import { bindActionCreators } from 'redux';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';

// Synchronous Action Creators
export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading
});

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data
});

// Asynchronous Thunk Action Creator
export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));

    try {
      const response = await fetch('/notifications.json');
      const data = await response.json();
      dispatch(setNotifications(data));
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      dispatch(setLoadingState(false));
    }
  };
};

// Bound Action Creators
export const boundNotificationActionCreators = (dispatch) =>
  bindActionCreators(
    {
      markAsAread,
      setNotificationFilter
    },
    dispatch
  );
