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
    it('enter the chosen product, add product to cart and go to checkout with invalid data' , async () => {
        await MainPage.firstTitleNameProduct.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await expect(MainPage.imageFirstProduct).toBeDisplayed();
        await MainPage.btnAddCartFirstProduct.click();
        await expect(MainPage.cartUnit).toBeDisplayed();
        await MainPage.btnGoCart.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(MainPage.checkboxCart).toBeDisplayed();
        await expect(MainPage.firstTitleNameProduct).toBeDisplayed();
        await MainPage.btnCheckout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        await expect(MainPage.titleCheckout).toBeDisplayed();
        await expect(MainPage.titleCheckout).toHaveText('CHECKOUT: YOUR INFORMATION');
        await MainPage.completeCheckout('', '', '');
        await MainPage.btnContinueCheckout.click();
        await expect(MainPage.errorMsgCheckout).toBeDisplayed();
        await expect(MainPage.errorMsgCheckout).toHaveText("Error: First Name is required");
        await MainPage.completeCheckout('juan', '', '');
        await MainPage.btnContinueCheckout.click();
        await expect(MainPage.errorMsgCheckout).toBeDisplayed();
        await expect(MainPage.errorMsgCheckout).toHaveText("Error: Last Name is required");
        await MainPage.completeCheckout('juan', 'perez', '');
        await MainPage.btnContinueCheckout.click();
        await expect(MainPage.errorMsgCheckout).toBeDisplayed();
        await expect(MainPage.errorMsgCheckout).toHaveText("Error: Postal Code is required");
        await MainPage.btnCancelCheckout.click();
        await MainPage.btnGoToMenu.click();
    });
    it('should open social media from home page and return to home', async () => {
        await MainPage.btnTwitter.click();
        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await MainPage.btnFacebook.click();
        await browser.switchWindow('https://www.facebook.com/saucelabs');
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await MainPage.btnLinkedIn.click();
        await browser.switchWindow('Iniciar sesión | LinkedIn');
        await expect(browser).toHaveUrlContaining('https://www.linkedin.com/');
        await expect(MainPage.titleLinkedIn).toBeDisplayed();
        await expect(MainPage.formLinkedIn).toBeDisplayed();
        await browser.switchWindow('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await MainPage.btnBurguerMenu.click();
        await MainPage.btnLogout.click();
    });
});