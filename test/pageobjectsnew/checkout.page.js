import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class CheckoutPage extends BasePage {

    get firstNameInput () {
        return $('#first-name')
    }

    get lastNameInput () {
        return $('#last-name')
    }

    get zipCodeInput () {
        return $('#postal-code')
    }

    get continueButton () {
        return $('#continue')
    }

}

export default new CheckoutPage()
