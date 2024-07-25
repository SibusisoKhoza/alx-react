import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Notifications component', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'Notification 1' },
    { id: 2, type: 'urgent', value: 'Notification 2' },
  ];
  const { getByText } = render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  const notification1 = getByText(/Notification 1/i);
  const notification2 = getByText(/Notification 2/i);
  expect(notification1).toBeInTheDocument();
  expect(notification2).toBeInTheDocument();
});

test('clicking on the menu item calls handleDisplayDrawer', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const { getByText } = render(
    <Notifications
      displayDrawer={false}
      listNotifications={[]}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}
    />
  );
  const menuItem = getByText(/Your notifications/i);
  fireEvent.click(menuItem);
  expect(handleDisplayDrawer).toHaveBeenCalled();
});

test('clicking on the button calls handleHideDrawer', () => {
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();
  const listNotifications = [
    { id: 1, type: 'default', value: 'Notification 1' },
    { id: 2, type: 'urgent', value: 'Notification 2' },
  ];
  const { getByLabelText } = render(
    <Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}
    />
  );
  const closeButton = getByLabelText(/Close/i);
  fireEvent.click(closeButton);
  expect(handleHideDrawer).toHaveBeenCalled();
});
