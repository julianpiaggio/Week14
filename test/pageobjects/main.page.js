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

    get btnGoCart () {
        return $('.shopping_cart_link')
    }

    get checkboxCart () {
        return $('.cart_quantity')
    }

    get btnCheckout () {
        return $('#checkout')
    }

    get titleCheckout () {
        return $('.title')
    }

    get inputCheckoutFirstName () {
        return $('#first-name')
    }

    get inputCheckoutLastName () {
        return $('#last-name')
    }

    get inputCheckoutPostalCode () {
        return $('#postal-code')
    }

    get btnContinueCheckout () {
        return $('#continue')
    }

    get errorMsgCheckout () {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3')
    }

    get btnCancelCheckout () {
        return $('#cancel')
    }

    get btnGoToMenu () {
        return $('#continue-shopping')
    }

    get btnContinueCheckout () {
        return $('#continue')
    }

    get btnFinish () {
        return $('#finish')
    }

    get itemDescriptionProduct () {
        return $('.inventory_item_desc')
    }

    get paymentInformationPurchase () {
        return $('//div[.="Payment Information:"]')
    }

    get shippingInformationPurchase () {
        return $('//div[.="Shipping Information:"]')
    }

    get subTotalPurchase () {
        return $('.summary_subtotal_label')
    }

    get taxPurchase () {
        return $('.summary_tax_label')
    }

    get totalPurchase () {
        return $('.summary_total_label')
    }

    get btnTwitter () {
        return $('//li[.="Twitter"]')
    }

    get btnFacebook () {
        return $('//li[.="Facebook"]')
    }

    get btnLinkedIn () {
        return $('//li[.="LinkedIn"]')
    }

    get btnLinkedInCloseModal () {
        return $('/html/body/header/nav/section/div[1]/button/icon/svg')
    }

    get titleLinkedIn () {
        return $('body > div > header > nav > a > icon > svg')
    }

    get formLinkedIn () {
        return $('.join-form')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async completeCheckout (username, lastName, postalcode) {
        await this.inputCheckoutFirstName.setValue(username);
        await this.inputCheckoutLastName.setValue(lastName);
        await this.inputCheckoutPostalCode.setValue(postalcode);
    }

}
export default new MainPage();