import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class InventoryPage extends BasePage {
    get pageTitle () {
        return $('span[class="title"]')
    }

    get burgerIcon () {
        return $('#react-burger-menu-btn')
    }

    get logoutSidebarLink () {
        return $('#logout_sidebar_link')
    }

    get aboutSideBarLink () {
        return $('#about_sidebar_link')
    }

    get crossIconSideBarButton () {
        return $('#react-burger-cross-btn')
    }

    get inventoryItem_0 () {
        return $('#item_0_img_link')
    }

    get inventoryItem_5 () {
        return $('#item_5_img_link')
    }

    get shoppingCartLink () {
        return $('a[class="shopping_cart_link"]')
    }

    get sauceLabsBackpackAddToCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get sauceLabsBikeLight () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get myCartBadge () {
        return $('.shopping_cart_badge')
    }

    get selectSortContainer () {
        return $('select[class="product_sort_container"]')
    }

    get optionLowToHigh () {
        return $('option[value="lohi"]')
    }

    get optionAtoZ () {
        return $('option[value="az"]')
    }

    get optionZtoA () {
        return $('option[value="za"]')
    }

    get sideBarMenu () {
        return $('div[class="bm-menu"]')
    }
}

export default new InventoryPage();