import { getUnreadNotificationsByType } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      entities: {
        notifications: {
          '1': { id: '1', type: 'default', value: 'Test 1', isRead: false },
          '2': { id: '2', type: 'urgent', value: 'Test 2', isRead: false },
          '3': { id: '3', type: 'urgent', value: 'Test 3', isRead: true },
          '4': { id: '4', type: 'default', value: 'Test 4', isRead: true }
        }
      },
      filter: 'DEFAULT'
    }
  });

  it('returns unread notifications for DEFAULT filter', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.toJS()).toEqual([
      { id: '1', type: 'default', value: 'Test 1', isRead: false },
      { id: '2', type: 'urgent', value: 'Test 2', isRead: false }
    ]);
  });

  it('returns only urgent unread notifications for URGENT filter', () => {
    const urgentState = state.setIn(['notifications', 'filter'], 'URGENT');
    const result = getUnreadNotificationsByType(urgentState);
    expect(result.toJS()).toEqual([
      { id: '2', type: 'urgent', value: 'Test 2', isRead: false }
    ]);
  });
});
