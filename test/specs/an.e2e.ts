import { expect } from '@wdio/globals'
import Landing from '../pageobjects/landing.page'
import allureReporter from '@wdio/allure-reporter'
import AppOption from '../pageobjects/appOption.page'

describe('Android Automation', () => {
    it('Go to action bar page', async () => {
        allureReporter.addFeature('Tap on app option')
        await Landing.actionBar
        //click on app option
        await Landing.openAppOption()
        await expect(await Landing.actionBar).toBeExisting()

    })

    it('Validate api demos text', async () => {
        allureReporter.addFeature('Validate api demo text')
        const className = await $('android.widget.TextView')
        await expect(className).toHaveText("API Demos")
    })

    it('Go to alert options and validate text', async () => {
        allureReporter.addFeature('Go to alert options and validate text')
        await AppOption.clickOnAlertDialogsOption()
        await AppOption.clickOnListDialogsOption()
        await AppOption.clickOnCommandTwoOption()

        // const xpathAlertDialogs = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        // await xpathAlertDialogs.click()
        // const listDialog = await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]')
        // await listDialog.click()
        // const commandTwo = await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Command two"]')
        // await commandTwo.click()
        // const commandTwoText = await $('//android.widget.TextView[@resource-id="android:id/message"]')
        await expect(await AppOption.commandTwoOptionMessage).toHaveText("You selected: 1 , Command two")
    })
})

