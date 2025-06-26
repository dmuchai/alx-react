import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Input selectors
const filterTypeSelectedSelector = (state) => state.ui.get('filter');
const notificationsSelector = (state) => state.notifications.get('messages', Map());

// Memoized selector for unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelectedSelector, notificationsSelector],
  (filter, messages) => {
    return messages
      .valueSeq()
      .filter((notification) => {
        const isUnread = !notification.get('isRead');
        const isUrgent = notification.get('type') === 'urgent';

        if (filter === 'URGENT') {
          return isUnread && isUrgent;
        }
        return isUnread;
      });
  }
);

export const filterTypeSelected = filterTypeSelectedSelector;
export const getNotifications = notificationsSelector;
