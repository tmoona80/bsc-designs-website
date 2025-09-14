# BSC Designs Website Test Suite

## Overview

This test suite covers the critical functionality and cross-browser compatibility for the BSC Designs website using Playwright.

## Test Coverage

### Core Functionality Tests (`core-functionality.spec.ts`)
- ✅ Homepage loads within 3 seconds
- ✅ Contact form validation
- ✅ Form submission functionality
- ✅ Contact information display
- ✅ Social media links

### Cross-Browser Compatibility Tests (`cross-browser.spec.ts`)
- ✅ Rendering across Chrome, Firefox, Safari, Edge
- ✅ Mobile responsiveness (Chrome, Safari)
- ✅ Form functionality across browsers
- ✅ Image loading
- ✅ Typography consistency
- ✅ Navigation behavior

## Running Tests

```bash
# Run all tests
npm test

# Run tests with browser UI visible
npm run test:headed

# Run tests with Playwright UI
npm run test:ui

# Run only core functionality tests
npm run test:core

# Run only cross-browser tests
npm run test:cross-browser

# View test results
npm run test:report
```

## Test Configuration

The tests are configured to run against:
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: Chrome (Pixel 5), Safari (iPhone 12)

The test server automatically starts the Next.js development server on `http://localhost:3000`.

## Notes

- Tests require the development server to be available
- Some tests may need adjustment based on the actual implementation details
- Form submission tests may need updates based on success message implementation
- Contact form selectors may need refinement based on actual form structure