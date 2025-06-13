import * as notificationsData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter((notif) => notif.author?.id === userId)
    .map((notif) => notif.context);
}
