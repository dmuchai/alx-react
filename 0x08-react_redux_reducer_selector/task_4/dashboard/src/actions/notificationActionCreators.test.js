import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter
} from './notificationActionCreators';

describe('notificationActionCreators', () => {
  it('markAsAread(1) should return correct action', () => {
    const expected = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(markAsAread(1)).toEqual(expected);
  });

  it('setNotificationFilter(DEFAULT) should return correct action', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expected);
  });

  it('setNotificationFilter(URGENT) should return correct action', () => {
    const expected = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    };
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(expected);
  });
});
