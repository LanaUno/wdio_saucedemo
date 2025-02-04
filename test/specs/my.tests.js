import loginPage from '../pageobjectsnew/login.page.js'
import inventoryPage from '../pageobjectsnew/inventory.page.js'
import myCartPage from '../pageobjectsnew/my.cart.page.js'

describe('Saucedemo tests', () => {

    beforeEach(async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        })
    
    it('Close sidebar with "X" icon', async () => {
        await inventoryPage.clickBurgerIcon()
        await inventoryPage.clickCrossIconSideBarButton()
        await inventoryPage.sideBarMenu.isDisplayed({withinViewport: false})
    })

    it('Link "About" redirects to the main page', async () => {     
        await inventoryPage.clickBurgerIcon()
        await inventoryPage.clickAboutSideBarLink()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    })

    it('User can continue shopping', async () => {
        await inventoryPage.clickSauceLabsBackpackAddToCartBtn()
        await inventoryPage.clickShoppingCartLink()
        await myCartPage.clickContinueShopingButton()
        await expect(inventoryPage.pageTitle).toHaveText(
              expect.stringContaining('Products'))
        await expect(inventoryPage.myCartBadge).toHaveText(
              expect.stringContaining('1'))
    })

})