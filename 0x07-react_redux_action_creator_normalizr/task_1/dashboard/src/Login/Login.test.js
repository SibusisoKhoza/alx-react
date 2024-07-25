import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders Login component', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Login to access the full dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('submit button is disabled by default', () => {
  const { getByText } = render(<Login />);
  const submitButton = getByText(/OK/i);
  expect(submitButton).toBeDisabled();
});

test('submit button is enabled after changing the value of the two inputs', () => {
  const { getByLabelText, getByText } = render(<Login />);
  const emailInput = getByLabelText(/Email/i);
  const passwordInput = getByLabelText(/Password/i);
  const submitButton = getByText(/OK/i);

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  expect(submitButton).toBeEnabled();
});
