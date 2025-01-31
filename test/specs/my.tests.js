import LoginPage from '../pageobjectsnew/login.page.js'
import InventoryPage from '../pageobjectsnew/inventory.page.js'
import MyCartPage from '../pageobjectsnew/my.cart.page.js'

describe('Saucedemo tests', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        })
    
    it('Close sidebar with "X" icon', async () => {
        await InventoryPage.burgerIcon.click()
        await InventoryPage.crossIconSideBarButton.click()
        await InventoryPage.sideBarMenu.isDisplayed({withinViewport: false})
    })

    it('Link "About" redirects to the main page', async () => {     
        await InventoryPage.burgerIcon.click()
        await InventoryPage.aboutSideBarLink.click()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
    })

    it('User can continue shopping', async () => {
        await InventoryPage.sauceLabsBikeLight.click()
        await InventoryPage.myCartBadge.click()
        await MyCartPage.continueShopingButton.click()
        await expect(InventoryPage.pageTitle).toHaveText(
              expect.stringContaining('Products'))
        await expect(InventoryPage.myCartBadge).toHaveText(
              expect.stringContaining('1'))
    })

})