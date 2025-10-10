const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../../helper/helper');

const lpjTahap3 = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 3")

    await timeout(1000)
    await driver.elementClick(byValueKey('dropdown_sk'))
    await driver.elementClick(byText(setup['dropdown_sk']))

    await timeout(1000)
    await driver.elementClick(byValueKey('btn_submit'))

    console.log("END RUNNING AUTOMATION TESTING LPJ TAHAP 3")
}

module.exports = {
    lpjTahap3
}