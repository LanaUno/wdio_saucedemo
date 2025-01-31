import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class MyCartPage extends BasePage {

    get inventoryItemName () {
        return $('.inventory_item_name')
    }

    get checkoutButton () {
        return $('#checkout')
    }

    get yourCartTitle () {
        return $('span[class="title"]')
    }

    get cartItem () {
        return $('div[class="cart_item"]')
    }

    get continueShopingButton () {
        return $('#continue-shopping')
    }
}

export default new MyCartPage()