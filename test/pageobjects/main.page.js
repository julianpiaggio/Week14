class MainPage{

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    get btnBurguerMenu () {
        return $('#react-burger-menu-btn');
    }

    get btnLogout () {
        return $('#logout_sidebar_link');
    }

    get logoLogin () {
        return $('.login_logo');
    }

    get logoPage () {
        return $('.app_logo');
    }

    get imagePage () {
        return $('.bot_column');
    }

    get firstTitleNameProduct () {
        return $('//div[.="Sauce Labs Backpack"]')
    }

    get secondTitleNameProduct () {
        return $('//div[.="Sauce Labs Bike Light"]')
    }

    get thirdTitleNameProduct () {
        return $('//div[.="Sauce Labs Bolt T-Shirt"]')
    }

    get fourthTitleNameProduct () {
        return $('//div[.="Sauce Labs Fleece Jacket"]')
    }

    get fifthTitleNameProduct () {
        return $('//div[.="Sauce Labs Onesie"]')
    }

    get sixthTitleNameProduct () {
        return $('//div[.="Test.allTheThings() T-Shirt (Red)"]')
    }

    get imageFirstProduct () {
        return $('.inventory_details_img_container')
    }

    get btnAddCartFirstProduct () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get btnremoveCartFirstProduct () {
        return $('#remove-sauce-labs-backpack')
    }

    get cartUnit () {
        return $('.shopping_cart_badge')
    }

    get btnGoHome () {
        return $('#back-to-products')
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}
export default new MainPage();