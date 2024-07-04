// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('does not display CourseList when isLoggedIn is false', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Available courses')).toBeNull();
});

describe('when isLoggedIn is true', () => {
  test('does not include Login component', () => {
    const { queryByText } = render(<App isLoggedIn={true} />);
    expect(queryByText('Login')).toBeNull();
  });

  test('includes CourseList component', () => {
    const { getByText } = render(<App isLoggedIn={true} />);
    expect(getByText('Available courses')).toBeInTheDocument();
  });
});
