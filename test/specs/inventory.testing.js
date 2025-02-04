import loginPage from '../pageobjectsnew/login.page.js'
import inventoryPage from '../pageobjectsnew/inventory.page.js'
import myCartPage from '../pageobjectsnew/my.cart.page.js'
import footerPage from '../pageobjectsnew/footer.page.js'
import checkoutPage from '../pageobjectsnew/checkout.page.js'
import overviewPage from '../pageobjectsnew/overview.page.js'
import checkoutCompletePage from '../pageobjectsnew/checkout.complete.page.js'


describe('Inventory page testing', () => {

    beforeEach(async () => {
            await loginPage.open()
            await loginPage.login('standard_user', 'secret_sauce')
        })

    it('Logout', async () => {
        await inventoryPage.clickBurgerIcon()
        await inventoryPage.clickLogoutSidebarLink()
        await loginPage.inputUsername.isDisplayed()
        await loginPage.inputPassword.isDisplayed()
        await loginPage.userNamePlaceholder.isDisplayed()
        await loginPage.userPasswordPlaceholder.isDisplayed()
        
    })

    it('Saving the cart after logout', async () => {
        await inventoryPage.clickSauceLabsBackpackAddToCartBtn()
        await expect(inventoryPage.myCartBadge).toHaveText(
              expect.stringContaining('1'))
        await inventoryPage.clickBurgerIcon()
        await inventoryPage.clickLogoutSidebarLink()
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.clickShoppingCartLink()
        await expect(myCartPage.inventoryItemName).toHaveText(
              expect.stringContaining('Sauce Labs Backpack'))
    })

    it('Sorting Name(A to Z)', async () => {
        
        // Products are sorted A to Z by default
        // Get the list of sorted products
        const names = await $$('div[class="inventory_item_name "]')
        const namesAll = await names.map(name => {return name.getText()}) 
        console.log(namesAll) 
         
        // Sort the list from A to Z with js method
        const namesAllSorted = await namesAll.sort()
        console.log(namesAllSorted)

        // Make sure sorting from A to Z works properly
        const tempList = await namesAll
        for (let i = 0; i < namesAll.length; i++){
               if ( tempList[i] == namesAllSorted[i]) {console.log(true) 
                } else {console.log(false)}             
        } 
        // Take sorted values form Z to A
        await inventoryPage.clickSelectSortContainer()
        await inventoryPage.clickOptionZtoA()
        const namesZtoA = await $$('div[class="inventory_item_name "]')
        const namesAllZtoA = await namesZtoA.map(name => {return name.getText()}) 
        console.log(namesAllZtoA) 
        
        // Compaire values sorted A to Z with values sorted Z to A, should return false
        for (let i = 0; i < namesAll.length; i++){
               if ( tempList[i] == namesAllZtoA[i]) {console.log(true) 
                } else {console.log(false)}             
        } 
         
         // Sort values Z to A to get A to Z order with js method and compaire them again 
         // with values sorted A to Z, should return true  
         const namesAllZtoASorted = await namesAllZtoA.sort()
         console.log(namesAllZtoASorted)
         for (let i = 0; i < namesAll.length; i++){
            if ( tempList[i] == namesAllZtoASorted[i]) {console.log(true)  
            } else {console.log(false)}             
        }  
   })

   it('Footer Links', async () => {
      await footerPage.clickTwitterIcon()
      await browser.switchWindow('saucelabs?mx=2')
      await expect(browser).toHaveUrl('https://x.com/saucelabs?mx=2')
      await browser.switchWindow('saucedemo.com/inventory.html')
    
      await footerPage.clickFacebookIcon()
      await browser.switchWindow('facebook.com/saucelabs')
      await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
      await browser.switchWindow('saucedemo.com/inventory.html')

      await footerPage.clickLinkedinIcon()
      await browser.switchWindow('company/sauce-labs/')
      await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
      await browser.switchWindow('saucedemo.com/inventory.html')
   })

   it('Valid Checkout', async () => {
      await inventoryPage.clickSauceLabsBikeLightAddToCartBtn()
      await inventoryPage.clickShoppingCartLink()
      await myCartPage.clickCheckoutButton()
      await checkoutPage.setCheckoutInfo('user', 'user1', '15561')
      await checkoutPage.clickContinueButton()
      await overviewPage.clickFinishButton()
      await expect(checkoutCompletePage.completeHeader).toHaveText(
            expect.stringContaining('Thank you for your order!'))
      await checkoutCompletePage.clickBackToProductsButton()
      await expect(inventoryPage.pageTitle).toHaveText(
            expect.stringContaining('Products'))
      await inventoryPage.myCartBadge.isDisplayed({withinViewport: false})
   })

   it('Checkout without products', async () => {
      await inventoryPage.clickShoppingCartLink()
      await expect(myCartPage.yourCartTitle).toHaveText(
        expect.stringContaining('Your Cart'))
      await myCartPage.cartItem.isDisplayed({withinViewport: false})
      await myCartPage.clickCheckoutButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
   })
        
})