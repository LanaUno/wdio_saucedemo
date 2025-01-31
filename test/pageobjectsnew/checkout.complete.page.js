import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class CheckoutCompletePage extends BasePage {
    get completeHeader () {
        return $('h2[class="complete-header"]')
    }

    get backToProductsButton () {
        return $('#back-to-products')
    }
}

export default new CheckoutCompletePage()