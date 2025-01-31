 import LoginPage from '../pageobjectsnew/login.page.js'
 import InventoryPage from '../pageobjectsnew/inventory.page.js'


describe('Login page testing', () => {

    beforeEach(async () => {
        await LoginPage.open()
    })

    it('Valid Login', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.pageTitle).toHaveText(
                    expect.stringContaining('Products'))
        await InventoryPage.inventoryItem_0.isDisplayed()
        await InventoryPage.inventoryItem_5.isDisplayed()
        await InventoryPage.shoppingCartLink.isDisplayed()
        
    })

    it('Login with invalid password', async () => {
        await LoginPage.login('standard_user', 'qwerty')
        await LoginPage.crossIconUserNameInput.isDisplayed()
        await LoginPage.crossIconPasswordInput.isDisplayed()
        await LoginPage.inputUsernameOnError.getCSSProperty('border-bottom-color: #e2231a')
        await LoginPage.inputPasswordOnError.getCSSProperty('border-bottom-color: #e2231a')
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining
            ('Epic sadface: Username and password do not match any user in this service'))
        await LoginPage.errorMessageContainer.getCSSProperty('background-color: #e2231a') 
    })

    it('Login with invalid login', async () => {
        await LoginPage.login('standarD_user', 'secret_sauce')
        await LoginPage.crossIconUserNameInput.isDisplayed()
        await LoginPage.crossIconPasswordInput.isDisplayed()
        await LoginPage.inputUsernameOnError.getCSSProperty('border-bottom-color: #e2231a')
        await LoginPage.inputPasswordOnError.getCSSProperty('border-bottom-color: #e2231a')
        await expect(LoginPage.errorMessage).toHaveText(
            expect.stringContaining
            ('Epic sadface: Username and password do not match any user in this service'))
        await LoginPage.errorMessageContainer.getCSSProperty('background-color: #e2231a') 
    })

    it('Check whether a password is shown as dots', async () => {
        await LoginPage.inputPassword.setValue('secret_sauce')
        await expect(LoginPage.inputPassword).toHaveAttribute('type',"password")
    })
})

