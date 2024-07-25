import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders BodySection component', () => {
  const { getByText } = render(<BodySection title="Test Title">Test Content</BodySection>);
  const titleElement = getByText(/Test Title/i);
  const contentElement = getByText(/Test Content/i);
  expect(titleElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});
