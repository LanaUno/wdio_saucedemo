import { browser } from '@wdio/globals'

export default class BasePage {
    
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}