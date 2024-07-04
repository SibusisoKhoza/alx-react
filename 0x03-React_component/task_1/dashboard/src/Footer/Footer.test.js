// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('shallow render Footer component without crashing', () => {
  render(<Footer />);
});

test('renders the text “Copyright”', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Copyright/i)).toBeInTheDocument();
});
