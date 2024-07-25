import { useDispatch } from 'react-redux';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export const useNotificationActions = () => {
  const dispatch = useDispatch();

  return {
    markAsRead: (index) => dispatch(markAsRead(index)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  };
};