import mainPage from '../pageobjects/main.page';
import MainPage from  '../pageobjects/main.page';

describe('My Login application', () => {
    beforeAll('Navigation to URL', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('should login with valid credentials', async () => {
        await MainPage.login('standard_user' , 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(MainPage.logoPage).toBeDisplayed();
    });
    it('enter the chosen product, add product to cart, remove the unit and go back to main page' , async () => {
        await MainPage.firstTitleNameProduct.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(MainPage.imageFirstProduct).toBeDisplayed();
        await MainPage.btnAddCartFirstProduct.click();
        await expect(MainPage.cartUnit).toBeDisplayed();
        await MainPage.btnremoveCartFirstProduct.click();
        await expect(MainPage.cartUnit).not.toBeDisplayed();
        await MainPage.btnGoHome.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});