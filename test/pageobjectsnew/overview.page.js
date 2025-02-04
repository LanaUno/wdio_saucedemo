import BasePage from './base.page.js';
 class OverviewPage extends BasePage{

    get finishButton () {return $('#finish')}

    async clickFinishButton () {
        await this.finishButton.click()
    }
    
 }

 export default new OverviewPage()