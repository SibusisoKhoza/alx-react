// Login.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';

test('shallow render Login component without crashing', () => {
  render(<Login />);
});

test('renders 2 input tags and 2 label tags', () => {
  const { container } = render(<Login />);
  const inputs = container.querySelectorAll('input');
  const labels = container.querySelectorAll('label');
  expect(inputs.length).toBe(2);
  expect(labels.length).toBe(2);
});
