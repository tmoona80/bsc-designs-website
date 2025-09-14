import { test, expect } from '@playwright/test';

test.describe('Cross-Browser Compatibility Tests', () => {
  test('homepage renders correctly across all browsers', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Basic rendering checks
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveTitle(/BSC Designs/i);
    
    // Check key sections are visible
    await expect(page.getByText(/custom merchandise printing/i).first()).toBeVisible();
    
    // Check navigation works
    const header = page.locator('header, nav').first();
    await expect(header).toBeVisible();
    
    console.log(`Homepage rendering test passed on ${browserName}`);
  });

  test('contact form functionality works across browsers', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.locator('#contact').getByRole('button', { name: /request a quote/i }).click();
    
    // Check form elements are interactive
    const form = page.locator('form');
    const nameField = form.getByLabel(/name/i);
    const emailField = form.getByLabel(/email/i);
    const serviceField = form.getByLabel(/service needed/i);
    const messageField = form.getByLabel(/project details/i);
    const submitButton = form.getByRole('button', { name: /get quote/i });
    
    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(serviceField).toBeVisible();
    await expect(messageField).toBeVisible();
    await expect(submitButton).toBeVisible();
    
    // Test form interaction
    await nameField.fill('Cross-browser Test');
    await emailField.fill('test@crossbrowser.com');
    await serviceField.selectOption('DTF Printing');
    await messageField.fill('Testing form functionality across browsers');
    
    // Verify values were entered correctly
    await expect(nameField).toHaveValue('Cross-browser Test');
    await expect(emailField).toHaveValue('test@crossbrowser.com');
    await expect(messageField).toHaveValue('Testing form functionality across browsers');
    
    console.log(`Contact form test passed on ${browserName}`);
  });

  test('responsive design works on mobile browsers', async ({ page, browserName }) => {
    // This test will run on Mobile Chrome and Mobile Safari based on our config
    if (!browserName.includes('Mobile')) {
      test.skip();
    }
    
    await page.goto('/');
    
    // Check that content is still visible and properly sized on mobile
    await expect(page.getByRole('main')).toBeVisible();
    
    // Check that text is readable (not cut off or overlapping)
    const mainHeading = page.getByRole('heading').first();
    await expect(mainHeading).toBeVisible();
    
    // Verify mobile navigation (hamburger menu, etc.)
    // This might need adjustment based on your actual mobile navigation implementation
    const navigation = page.locator('nav, header').first();
    await expect(navigation).toBeVisible();
    
    console.log(`Mobile responsive test passed on ${browserName}`);
  });

  test('images and assets load correctly', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Check for any broken images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      // Check first few images are loaded
      for (let i = 0; i < Math.min(5, imageCount); i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();
        
        // Check that image has actually loaded (not broken)
        const naturalWidth = await img.evaluate((img: HTMLImageElement) => img.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
    
    console.log(`Image loading test passed on ${browserName} with ${imageCount} images`);
  });

  test('typography renders consistently', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Check that fonts are loading properly
    const mainHeading = page.getByRole('heading').first();
    await expect(mainHeading).toBeVisible();
    
    // Check computed font properties
    const headingFont = await mainHeading.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight
      };
    });
    
    // Verify font family includes expected fonts (Inter, etc.)
    expect(headingFont.fontFamily).toBeTruthy();
    expect(headingFont.fontSize).toBeTruthy();
    
    console.log(`Typography test passed on ${browserName}`, headingFont);
  });

  test('navigation and scroll behavior works', async ({ page, browserName }) => {
    await page.goto('/');
    
    // Test scroll to contact section directly
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Wait for scroll to complete
    await page.waitForTimeout(500);
    
    // Check that the contact section is in viewport
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeInViewport();
    
    // Verify we can see the "Request a Quote" button
    await expect(page.getByRole('button', { name: /request a quote/i })).toBeVisible();
    
    console.log(`Navigation test passed on ${browserName}`);
  });
});