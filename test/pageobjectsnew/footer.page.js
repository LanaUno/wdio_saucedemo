import BasePage from './base.page.js';

class FooterPage extends BasePage {

    get twitterIcon () {return $('a[data-test="social-twitter"]')}
    get facebookIcon () {return $('a[data-test="social-facebook"]')}
    get linkedinIcon () {return $('a[data-test="social-linkedin"]')}

    async clickTwitterIcon () {
        await this.twitterIcon.click()
    }

    async clickFacebookIcon () {
        await this.facebookIcon.click()
    }

    async clickLinkedinIcon () {
        await this.linkedinIcon.click()
    }

}

export default new FooterPage()