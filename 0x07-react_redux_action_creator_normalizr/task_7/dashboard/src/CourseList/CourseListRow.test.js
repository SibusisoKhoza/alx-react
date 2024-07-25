// CourseList/CourseListRow.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseListRow from './CourseListRow';

test('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
  const { container } = render(<CourseListRow isHeader={true} textFirstCell="Test Header" />);
  const th = container.querySelector('th');
  expect(th).toBeInTheDocument();
  expect(th).toHaveAttribute('colSpan', '2');
  expect(th).toHaveTextContent('Test Header');
});

test('renders two cells when textSecondCell is present and isHeader is true', () => {
  const { container } = render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
  const ths = container.querySelectorAll('th');
  expect(ths.length).toBe(2);
  expect(ths[0]).toHaveTextContent('Header 1');
  expect(ths[1]).toHaveTextContent('Header 2');
});

test('renders correctly two td elements within a tr element when isHeader is false', () => {
  const { container } = render(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
  const tds = container.querySelectorAll('td');
  expect(tds.length).toBe(2);
  expect(tds[0]).toHaveTextContent('Cell 1');
  expect(tds[1]).toHaveTextContent('Cell 2');
});
