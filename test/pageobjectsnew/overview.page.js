import { $ } from '@wdio/globals'
import BasePage from './base.page.js';


 class OverviewPage extends BasePage{

    get finishButton () {
        return $('#finish')
    }
 }

 export default new OverviewPage()