 import loginPage from '../pageobjectsnew/login.page.js'
 import inventoryPage from '../pageobjectsnew/inventory.page.js'


describe('Login page testing', () => {

    beforeEach(async () => {
        await loginPage.open()
    })

    it('Valid Login', async () => {
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(inventoryPage.pageTitle).toHaveText(
                    expect.stringContaining('Products'))
        await inventoryPage.inventoryItem_0.isDisplayed()
        await inventoryPage.inventoryItem_5.isDisplayed()
        await inventoryPage.shoppingCartLink.isDisplayed()
        
    })

    it('Login with invalid password', async () => {
        await loginPage.login('standard_user', 'qwerty')
        await loginPage.crossIconUserNameInput.isDisplayed()
        await loginPage.crossIconPasswordInput.isDisplayed()
        await loginPage.inputUsernameOnError.getCSSProperty('border-bottom-color: #e2231a')
        await loginPage.inputPasswordOnError.getCSSProperty('border-bottom-color: #e2231a')
        await expect(loginPage.errorMessage).toHaveText(
            expect.stringContaining
            ('Epic sadface: Username and password do not match any user in this service'))
        await loginPage.errorMessageContainer.getCSSProperty('background-color: #e2231a') 
    })

    it('Login with invalid login', async () => {
        await loginPage.login('standarD_user', 'secret_sauce')
        await loginPage.crossIconUserNameInput.isDisplayed()
        await loginPage.crossIconPasswordInput.isDisplayed()
        await loginPage.inputUsernameOnError.getCSSProperty('border-bottom-color: #e2231a')
        await loginPage.inputPasswordOnError.getCSSProperty('border-bottom-color: #e2231a')
        await expect(loginPage.errorMessage).toHaveText(
            expect.stringContaining
            ('Epic sadface: Username and password do not match any user in this service'))
        await loginPage.errorMessageContainer.getCSSProperty('background-color: #e2231a') 
    })

    it('Check whether a password is shown as dots', async () => {
        await loginPage.inputPassword.setValue('secret_sauce')
        await expect(loginPage.inputPassword).toHaveAttribute('type',"password")
    })
})

