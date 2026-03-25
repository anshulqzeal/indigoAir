import { test, expect } from '@playwright/test';
import { AmazonPage } from '../src/pages/amazon.page';

// Test suite for Amazon search and add-to-cart functionality

test.describe('Amazon Search and Add to Cart', () => {
  let amazonPage: AmazonPage;

  test.beforeEach(async ({ page }) => {
    amazonPage = new AmazonPage(page);
    await amazonPage.navigateToAmazon();
  });

  test('Search for a product and add to cart', async ({ page }) => {
    // Step 1: Verify homepage loads successfully
    await expect(page).toHaveURL('https://www.amazon.com');

    // Step 2: Enter "Wireless Mouse" in the search bar and click Search
    await amazonPage.searchProduct('Wireless Mouse');

    // Step 3: Select the first non-sponsored product from the search results
    await amazonPage.selectFirstProduct();

    // Step 4: Click "Add to Cart" on the product details page
    await amazonPage.addToCart();

    // Step 5: Open the Cart and verify the correct product is added with quantity 1
    await amazonPage.verifyCartContents('Wireless Mouse', 1);
  });
});
