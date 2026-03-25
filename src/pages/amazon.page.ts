import { BasePage } from './base.page';
import { ActionUtils } from '../utils/action-utils';

export class AmazonPage extends BasePage {
  private url: string = 'https://www.amazon.com';
  private searchInput: string = "//input[@id='twotabsearchtextbox']";
  private searchButton: string = "//input[@value='Go']";
  private firstProduct: string = "//div[@data-component-type='s-search-result']//h2/a";
  private addToCartButton: string = "//input[@id='add-to-cart-button']";
  private cartButton: string = "//a[@id='nav-cart']";
  private cartItem: string = "//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']";

  constructor() {
    super();
  }

  public navigateToAmazon(): void {
    this.navigate(this.url);
  }

  public searchProduct(productName: string): void {
    ActionUtils.inputText(this.searchInput, productName);
    ActionUtils.click(this.searchButton);
  }

  public selectFirstProduct(): void {
    ActionUtils.click(this.firstProduct);
  }

  public addToCart(): void {
    ActionUtils.click(this.addToCartButton);
  }

  public verifyCartContents(expectedProductName: string): boolean {
    ActionUtils.click(this.cartButton);
    return ActionUtils.verifyText(this.cartItem, expectedProductName);
  }
}
