import LoginPage from '../pageobjectsnew/login.page.js'
import InventoryPage from '../pageobjectsnew/inventory.page.js'
import MyCartPage from '../pageobjectsnew/my.cart.page.js'
import FooterPage from '../pageobjectsnew/footer.page.js'
import CheckoutPage from '../pageobjectsnew/checkout.page.js'
import OverviewPage from '../pageobjectsnew/overview.page.js'
import CheckoutCompletePage from '../pageobjectsnew/checkout.complete.page.js'


describe('Inventory page testing', () => {

    beforeEach(async () => {
            await LoginPage.open()
            await LoginPage.login('standard_user', 'secret_sauce')
        })

    it('Logout', async () => {
        await InventoryPage.burgerIcon.click()
        await InventoryPage.logoutSidebarLink.click()
        await LoginPage.inputUsername.isDisplayed()
        await LoginPage.inputPassword.isDisplayed()
        await LoginPage.userNamePlaceholder.isDisplayed()
        await LoginPage.userPasswordPlaceholder.isDisplayed()
        
    })

    it('Saving the cart after logout', async () => {
        await InventoryPage.sauceLabsBackpackAddToCartBtn.click()
        await expect(InventoryPage.myCartBadge).toHaveText(
              expect.stringContaining('1'))
        await InventoryPage.burgerIcon.click()
        await InventoryPage.logoutSidebarLink.click()
        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.shoppingCartLink.click()
        await expect(MyCartPage.inventoryItemName).toHaveText(
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
        await InventoryPage.selectSortContainer.click()
        await InventoryPage.optionZtoA.click()
        const namesZtoA = await $$('div[class="inventory_item_name "]')
        const namesAllZtoA = await namesZtoA.map(name => {return name.getText()}) 
        console.log(namesAllZtoA) 
        
        // Compaire values sorted A to Z with values sorted Z to A, should return false
        for (let i = 0; i < namesAll.length; i++){
               if ( tempList[i] == namesAllZtoA[i]) {console.log(true) 
                } else {console.log(false)}             
        } 
         
         // 3. Sort values Z to A to get A to Z order with js method and compaire them again 
         // with values sorted A to Z, should return true  
         const namesAllZtoASorted = await namesAllZtoA.sort()
         console.log(namesAllZtoASorted)
         for (let i = 0; i < namesAll.length; i++){
            if ( tempList[i] == namesAllZtoASorted[i]) {console.log(true)  
            } else {console.log(false)}             
        }  
   })

   it('Footer Links', async () => {
      await FooterPage.twitterIcon.click()
      await browser.switchWindow('saucelabs?mx=2')
      await expect(browser).toHaveUrl('https://x.com/saucelabs?mx=2')
      await browser.switchWindow('saucedemo.com/inventory.html')
    
      await FooterPage.facebookIcon.click()
      await browser.switchWindow('facebook.com/saucelabs')
      await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
      await browser.switchWindow('saucedemo.com/inventory.html')

      await FooterPage.linkedinIcon.click()
      await browser.switchWindow('company/sauce-labs/')
      await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
      await browser.switchWindow('saucedemo.com/inventory.html')
   })

   it('Valid Checkout', async () => {
      await InventoryPage.sauceLabsBikeLight.click()
      await InventoryPage.myCartBadge.click()
      await MyCartPage.checkoutButton.click()
      await CheckoutPage.firstNameInput.setValue('user')
      await CheckoutPage.lastNameInput.setValue('user1')
      await CheckoutPage.zipCodeInput.setValue('15561')
      await CheckoutPage.continueButton.click()
      await OverviewPage.finishButton.click()
      await expect(CheckoutCompletePage.completeHeader).toHaveText(
            expect.stringContaining('Thank you for your order!'))
      await CheckoutCompletePage.backToProductsButton.click()
      await expect(InventoryPage.pageTitle).toHaveText(
            expect.stringContaining('Products'))
      await InventoryPage.myCartBadge.isDisplayed({withinViewport: false})
   })

   it('Checkout without products', async () => {
      await InventoryPage.shoppingCartLink.click()
      await expect(MyCartPage.yourCartTitle).toHaveText(
        expect.stringContaining('Your Cart'))
      await MyCartPage.cartItem.isDisplayed({withinViewport: false})
      await MyCartPage.checkoutButton.click()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
   })
        
})

           
        
        

       
