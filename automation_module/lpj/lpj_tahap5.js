const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../../helper/helper');

const lpjTahap5 = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 5")

    var abjad = ['a', 'b', 'c', 'd', 'e', 'f']

    for(var i = 0; i < 6; i++) {
        await timeout(1000)
        var picked = setup[`controller41${abjad[i]}`]
        await driver.execute('flutter:scrollIntoView', byValueKey(`controller41${abjad[i]}`), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey(`controller41${abjad[i]}`), picked)
    }

    await timeout(1000)
    await driver.elementClick(byValueKey('btn_submit'))

    console.log("END RUNNING AUTOMATION TESTING LPJ TAHAP 5")
}

module.exports = {
    lpjTahap5
}