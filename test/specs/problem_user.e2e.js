import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll('Navigation to URL', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('should not login with empty inputs', async () => {
        await LoginPage.inputUsername.setValue("");
        await LoginPage.inputPassword.setValue("");
        await LoginPage.btnLogin.click();
        await LoginPage.errorMsg.waitForDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required")
        await expect(LoginPage.logoLogin).toBeDisplayed();
    });
    it('should not log in with empty username and complete password', async () => {
        await LoginPage.login('' , 'test');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username is required")
        await expect(LoginPage.logoLogin).toBeDisplayed();
        await browser.refresh();
    });
    it('should not log in with complete username and empty password', async () => {
        await LoginPage.login('problem_user' , '');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Password is required")
        await expect(LoginPage.logoLogin).toBeDisplayed();
    });
    it('should not login with invalid credentials', async () => {
        await LoginPage.login('problem_user' , 'test');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Username and password do not match any user in this service")
        await expect(LoginPage.logoLogin).toBeDisplayed();
    });
    it('should not login with valid credentials', async () => {
        await LoginPage.login('problem_user' , 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(LoginPage.logoPage).toBeDisplayed();
        await LoginPage.btnBurguerMenu.click();
        await LoginPage.btnLogout.click();
    });
});