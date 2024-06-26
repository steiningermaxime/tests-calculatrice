import { test, expect } from '@playwright/test';

test('basic operations', async ({ page }) => {
  await page.goto('http://localhost:5173');
  console.log('Page loaded');

  await page.waitForSelector('button:has-text("1")');
  console.log('Button 1 found');
  await page.click('button:has-text("1")');

  await page.waitForSelector('button:has-text("+")');
  console.log('Button + found');
  await page.click('button:has-text("+")');

  await page.waitForSelector('button:has-text("1")');
  console.log('Button 1 found');
  await page.click('button:has-text("1")');

  await page.waitForSelector('#equals');
  console.log('Button = found');
  await page.click('#equals');

  const display = await page.locator('#display').textContent();
  console.log('Display value:', display);
  expect(display).toBe('2');

  await page.waitForSelector('#reset');
  console.log('Button C found');
  await page.click('#reset');

  await page.waitForSelector('button:has-text("2")');
  console.log('Button 2 found');
  await page.click('button:has-text("2")');

  await page.waitForSelector('button:has-text("*")');
  console.log('Button * found');
  await page.click('button:has-text("*")');

  await page.waitForSelector('button:has-text("3")');
  console.log('Button 3 found');
  await page.click('button:has-text("3")');

  await page.waitForSelector('#equals');
  console.log('Button = found');
  await page.click('#equals');

  const displayAfterMultiplication = await page.locator('#display').textContent();
  console.log('Display after multiplication:', displayAfterMultiplication);
  expect(displayAfterMultiplication).toBe('6');
});
