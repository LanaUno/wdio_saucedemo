import BasePage from './base.page.js';
class CheckoutPage extends BasePage {

    get firstNameInput () {return $('#first-name')}
    get lastNameInput () {return $('#last-name')}
    get zipCodeInput () {return $('#postal-code')}
    get continueButton () {return $('#continue')}

    async setCheckoutInfo (firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipCodeInput.setValue(zipCode);
    }

    async clickContinueButton () {
        await this.continueButton.click()
    }

}

export default new CheckoutPage()
