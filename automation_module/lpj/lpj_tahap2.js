const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../../helper/helper');

const lpjTahap2 = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 2")

    await timeout(1000)
    await driver.elementSendKeys(byValueKey('resume_text'), setup['resume_text'])

    if(process.env.APPIUM_DEVICE_NAME == 'SM G998B') {
        await timeout(1000)
        await driver.elementClick(byValueKey('btn_upload'))
    
        await driver.switchContext('NATIVE_APP')
    
        await driver.$("xpath:(//android.widget.ImageView[@resource-id=\"com.android.documentsui:id/icon_thumb\"])[1]").click()
    
        await driver.switchContext('FLUTTER')
        await timeout(2000)
    } else {
        console.log("SILAHKAN UPLOAD FILE")
        await timeout(10000)
    }

    await driver.elementClick(byValueKey('btn_submit'))

    console.log("END RUNNING AUTOMATION TESTING LPJ TAHAP 2")
}

module.exports = {
    lpjTahap2
}