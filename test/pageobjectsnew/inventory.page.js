import BasePage from './base.page.js';
class InventoryPage extends BasePage {
    get pageTitle () {return $('span[class="title"]')}
    get burgerIcon () {return $('#react-burger-menu-btn')}
    get logoutSidebarLink () {return $('#logout_sidebar_link')}
    get aboutSideBarLink () {return $('#about_sidebar_link')}
    get crossIconSideBarButton () {return $('#react-burger-cross-btn')}
    get inventoryItem_0 () {return $('#item_0_img_link')}
    get inventoryItem_5 () {return $('#item_5_img_link')}
    get shoppingCartLink () {return $('a[class="shopping_cart_link"]')}
    get sauceLabsBackpackAddToCartBtn () {return $('#add-to-cart-sauce-labs-backpack')}
    get sauceLabsBikeLightAddToCartBtn () {return $('#add-to-cart-sauce-labs-bike-light')}
    get myCartBadge () {return $('.shopping_cart_badge')}
    get selectSortContainer () {return $('select[class="product_sort_container"]')}
    get optionLowToHigh () {return $('option[value="lohi"]')}
    get optionAtoZ () { return $('option[value="az"]')}
    get optionZtoA () {return $('option[value="za"]')}
    get sideBarMenu () {return $('div[class="bm-menu"]')}

    get itemNames () {return $$('div[class="inventory_item_name "]')}
    get namesAll () {return this.itemNames.map(name => {return (name.getText())})} 
    
    async clickBurgerIcon () {
        await this.burgerIcon.click()
    }

    async clickLogoutSidebarLink () {
        await this.logoutSidebarLink.click()
    }

    async clickSauceLabsBackpackAddToCartBtn () {
        await this.sauceLabsBackpackAddToCartBtn.click()
    }

    async clickSauceLabsBikeLightAddToCartBtn () {
        await this.sauceLabsBikeLightAddToCartBtn.click()
    }

    async clickShoppingCartLink () {
        await this.shoppingCartLink.click()
    }

    async clickSelectSortContainer () {
        await this.selectSortContainer.click()
    }

    async clickOptionZtoA () {
        await this.optionZtoA.click()
    }

    async clickCrossIconSideBarButton () {
        await this.crossIconSideBarButton.click()
    }

    async clickAboutSideBarLink () {
        await this.aboutSideBarLink.click()
    }

    async switchWindow (path) {
        await browser.switchWindow(path)
    }

}

export default new InventoryPage();