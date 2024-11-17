import { $ } from '@wdio/globals'
import Page from './page';

class Landing extends Page {

    get appButton () {  return $('~App') }
    get actionBar () {  return $('~Action Bar') }

    async openAppOption () {
        await this.appButton
        await this.appButton.click()
    }

}

    

export default new Landing();
