import { bindActionCreators } from 'redux';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

export const boundNotificationActionCreators = (dispatch) =>
  bindActionCreators(
    {
      markAsAread,
      setNotificationFilter
    },
    dispatch
  );
