import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

// Define user entity
const user = new schema.Entity('users');

// Define message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize data
const normalizedData = normalize(notificationsData, [notification]);

// Export normalized data
export { user, message, notification, normalizedData };

// Filter function
export const getAllNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedData.entities;
  const result = [];

  for (const notif of Object.values(notifications)) {
    if (notif.author === userId) {
      result.push(messages[notif.context]);
    }
  }

  return result;
};
