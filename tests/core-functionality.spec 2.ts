import { test, expect } from '@playwright/test';

test.describe('Core Functionality Tests', () => {
  test('homepage loads successfully within 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // Wait for main content to be visible
    await expect(page.getByRole('main')).toBeVisible();
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
    
    // Verify key elements are present
    await expect(page).toHaveTitle(/BSC Designs/i);
    await expect(page.getByText(/custom merchandise printing/i)).toBeVisible();
  });

  test('contact form is visible and has required fields', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Click "Request a Quote" button to show the form
    await page.getByRole('button', { name: /request a quote/i }).click();
    
    // Check for form elements
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/service needed/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /get quote/i })).toBeVisible();
  });

  test('form validation works for required fields', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /request a quote/i }).click();
    
    // Try to submit empty form
    await page.getByRole('button', { name: /get quote/i }).click();
    
    // Check that form is still visible (validation prevents submission)
    const nameField = page.getByLabel(/name/i);
    const emailField = page.getByLabel(/email/i);
    const messageField = page.getByLabel(/project details/i);
    
    // HTML5 validation should prevent submission
    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(messageField).toBeVisible();
  });

  test('form submission works with valid data', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /request a quote/i }).click();
    
    // Fill out form with valid data
    await page.getByLabel(/name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('test@example.com');
    await page.getByLabel(/service needed/i).selectOption('DTF Printing');
    await page.getByLabel(/project details/i).fill('This is a test message for BSC Designs');
    
    // Submit form
    await page.getByRole('button', { name: /get quote/i }).click();
    
    // Check for success message
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 10000 });
  });

  test('phone number and email are displayed correctly', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /request a quote/i }).click();
    
    // Check for contact information in the form
    await expect(page.getByText('(416) 788-3355')).toBeVisible();
    await expect(page.getByText('info@bscdesigns.ca')).toBeVisible();
  });

  test('social media links are present', async ({ page }) => {
    await page.goto('/');
    
    // Check for Instagram link
    await expect(page.getByRole('link', { name: /instagram/i }).or(
      page.locator('a[href*="instagram.com"]')
    )).toBeVisible();
  });
});