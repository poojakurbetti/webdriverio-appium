import Page from './page';

class AppOption extends Page {

    get alertDialogs () {  return $('//android.widget.TextView[@content-desc="Alert Dialogs"]') }
    get listDialogButton () {  return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]') }
    get commandTwoOption () {  return $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Command two"]') }
    get commandTwoOptionMessage () {  return $('//android.widget.TextView[@resource-id="android:id/message"]') }


    async clickOnAlertDialogsOption () {
        await this.alertDialogs
        await this.alertDialogs.click()
    }

    async clickOnListDialogsOption () {
        await this.listDialogButton
        await this.listDialogButton.click()
    }

    async clickOnCommandTwoOption () {
        await this.commandTwoOption
        await this.commandTwoOption.click()
    }

}

    

export default new AppOption();
