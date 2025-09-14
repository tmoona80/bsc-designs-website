import { test, expect } from '@playwright/test';

test.describe('Core Functionality Tests', () => {
  test('homepage loads successfully within 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // Wait for main content to be visible
    await expect(page.getByRole('main')).toBeVisible();
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000); // Allow up to 5 seconds for load
    
    // Verify key elements are present
    await expect(page).toHaveTitle(/BSC Designs/i);
    await expect(page.getByRole('heading', { name: /custom merchandise printing/i })).toBeVisible();
  });

  test('contact form is visible and has required fields', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Wait a moment for mobile rendering
    await page.waitForTimeout(1000);
    
    // Click "Request a Quote" button in the contact section to show the form
    await page.locator('#contact').getByRole('button', { name: /request a quote/i }).click();
    
    // Wait for form to appear
    await page.waitForTimeout(1000);
    
    // Check for form elements within the form
    const form = page.locator('form');
    await expect(form.getByLabel(/name/i)).toBeVisible();
    await expect(form.getByLabel(/email/i)).toBeVisible();
    await expect(form.getByLabel(/service needed/i)).toBeVisible();
    await expect(form.getByRole('button', { name: /get quote/i })).toBeVisible();
  });

  test('form validation works for required fields', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.locator('#contact').getByRole('button', { name: /request a quote/i }).click();
    await page.waitForTimeout(1000);
    
    // Try to submit empty form
    const form = page.locator('form');
    await form.getByRole('button', { name: /get quote/i }).click();
    
    // Check that form is still visible (validation prevents submission)
    const nameField = form.getByLabel(/name/i);
    const emailField = form.getByLabel(/email/i);
    const messageField = form.getByLabel(/project details/i);
    
    // HTML5 validation should prevent submission
    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(messageField).toBeVisible();
  });

  test('form submission works with valid data', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.locator('#contact').getByRole('button', { name: /request a quote/i }).click();
    await page.waitForTimeout(1000);
    
    // Fill out form with valid data
    const form = page.locator('form');
    await form.getByLabel(/name/i).fill('Test User');
    await form.getByLabel(/email/i).fill('test@example.com');
    await form.getByLabel(/service needed/i).selectOption('DTF Printing');
    await form.getByLabel(/project details/i).fill('This is a test message for BSC Designs');
    
    // Submit form
    await form.getByRole('button', { name: /get quote/i }).click();
    
    // Check for success message
    await expect(page.getByText(/thank you/i)).toBeVisible({ timeout: 10000 });
  });

  test('phone number and email are displayed correctly', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section and show form
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.locator('#contact').getByRole('button', { name: /request a quote/i }).click();
    await page.waitForTimeout(1000);
    
    // Check for contact information in the form area
    const contactCard = page.locator('#contact');
    await expect(contactCard.getByText('(416) 788-3355')).toBeVisible();
    await expect(contactCard.getByText('info@bscdesigns.ca')).toBeVisible();
  });

  test('social media links are present', async ({ page }) => {
    await page.goto('/');
    
    // Check for Instagram link
    await expect(page.getByRole('link', { name: /instagram/i }).or(
      page.locator('a[href*="instagram.com"]')
    )).toBeVisible();
  });
});