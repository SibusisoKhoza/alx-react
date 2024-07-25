// src/setupTests.js
import '@testing-library/jest-dom/extend-expect';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection for all tests
StyleSheetTestUtils.suppressStyleInjection();
