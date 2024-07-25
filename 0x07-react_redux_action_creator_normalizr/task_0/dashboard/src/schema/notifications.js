import notifications from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  let contextList = [];
  for (const notification in notifications) {
    if (notification.author.id === userId) {
        contextList.push(notification.context);
    }
  }
  return contextList;
}