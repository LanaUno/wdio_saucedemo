import { $ } from '@wdio/globals'
import BasePage from './base.page.js';

class FooterPage extends BasePage {

    get twitterIcon () {
        return $('a[data-test="social-twitter"]')
    }

    get facebookIcon () {
        return $('a[data-test="social-facebook"]')
    }

    get linkedinIcon () {
        return $('a[data-test="social-linkedin"]')
    }

}

export default new FooterPage()