import BasePage from './base.page.js';
class CheckoutCompletePage extends BasePage {

    get completeHeader () {return $('h2[class="complete-header"]')}
    get backToProductsButton () {return $('#back-to-products')}

    async clickBackToProductsButton () {
        await this.backToProductsButton.click()
    }
}

export default new CheckoutCompletePage()