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
    it('enter the chosen product, add product to cart and confirm purchase' , async () => {
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
        await MainPage.inputCheckoutFirstName.setValue(!undefined);
        await MainPage.inputCheckoutLastName.setValue(!undefined);
        await MainPage.inputCheckoutPostalCode.setValue(!undefined);
        await MainPage.btnContinueCheckout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await expect(MainPage.titleCheckout).toBeDisplayed();
        await expect(MainPage.titleCheckout).toHaveText('CHECKOUT: OVERVIEW');
        await expect(MainPage.firstTitleNameProduct).toBeDisplayed();
        await expect(MainPage.itemDescriptionProduct).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(MainPage.paymentInformationPurchase).toBeDisplayed();
        await expect(MainPage.shippingInformationPurchase).toBeDisplayed();
        await expect(MainPage.subTotalPurchase).toHaveText('Item total: $29.99');
        await expect(MainPage.taxPurchase).toHaveText('Tax: $2.40');
        await expect(MainPage.totalPurchase).toHaveText('Total: $32.39');
        await MainPage.btnFinish.click();
    })
});