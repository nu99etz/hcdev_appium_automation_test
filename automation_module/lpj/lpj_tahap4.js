const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../../helper/helper');

const lpjTahap4 = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 4")

    for(var i = 1; i <= 5; i++) {
        await timeout(1000)
        var picked = setup[`picked3${i}`]
        await driver.execute('flutter:scrollIntoView', byValueKey(`picked3${i}_${picked}`), { alignment: 0.1 })
        await driver.elementClick(byValueKey(`picked3${i}_${picked}`))
    }

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`efektivitas_action`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`efektivitas_action`), setup['efektivitas_action'])

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`efektivitas_saran`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`efektivitas_saran`), setup['efektivitas_saran'])

    await timeout(1000)
    await driver.elementClick(byValueKey('btn_submit'))
    
    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 4")
}

module.exports = {
    lpjTahap4
}