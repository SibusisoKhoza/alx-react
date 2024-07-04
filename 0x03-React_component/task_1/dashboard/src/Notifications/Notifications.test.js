// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notifications from './Notifications';

test('renders without crashing', () => {
  render(<Notifications />);
});

test('menu item is displayed when displayDrawer is false', () => {
  const { getByText } = render(<Notifications displayDrawer={false} />);
  expect(getByText('Your notifications')).toBeInTheDocument();
});

test('Notifications div is not displayed when displayDrawer is false', () => {
  const { queryByText } = render(<Notifications displayDrawer={false} />);
  expect(queryByText('Here is the list of notifications')).toBeNull();
});

test('menu item is displayed when displayDrawer is true', () => {
  const { getByText } = render(<Notifications displayDrawer={true} />);
  expect(getByText('Your notifications')).toBeInTheDocument();
});

test('Notifications div is displayed when displayDrawer is true', () => {
  const { getByText } = render(<Notifications displayDrawer={true} />);
  expect(getByText('Here is the list of notifications')).toBeInTheDocument();
});
