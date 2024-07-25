import { useDispatch } from 'react-redux';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

export const useUIActions = () => {
  const dispatch = useDispatch();

  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout()),
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer())
  };
};