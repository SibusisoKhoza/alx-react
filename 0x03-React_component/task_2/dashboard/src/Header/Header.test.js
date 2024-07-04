// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('shallow render Header component without crashing', () => {
  render(<Header />);
});

test('renders img and h1 tags', () => {
  const { container } = render(<Header />);
  const img = container.querySelector('img');
  const h1 = container.querySelector('h1');
  expect(img).toBeInTheDocument();
  expect(h1).toBeInTheDocument();
});
