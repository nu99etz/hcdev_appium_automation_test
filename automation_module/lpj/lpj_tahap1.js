const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../../helper/helper');

const lpjTahap1 = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING LPJ TAHAP 1")

    for(var i = 11; i <= 15; i++) {
        var arr = []
        if(i == 11) {
            arr = ['a','b','c','d','g']
        } else if(i == 13) {
            arr = ['a','b','c']
        } else if(i == 14) {
            arr = ['a','b','c','d','e','f']
        }
        console.log({
            i: arr
        })
        if(arr.length < 1) {
            await timeout(1000)
            var rand = setup[`picked${i}`]
            await driver.execute('flutter:scrollIntoView', byValueKey(`picked${i}_${rand}`), { alignment: 0.1 })
            await driver.elementClick(byValueKey(`picked${i}_${rand}`))
        } else {
            for(var j = 0; j < arr.length; j++) {
                await timeout(1000)
                var rand = setup[`picked${i}${arr[j]}`]
                await driver.execute('flutter:scrollIntoView', byValueKey(`picked${i}${arr[j]}_${rand}`), { alignment: 0.1 })
                await driver.elementClick(byValueKey(`picked${i}${arr[j]}_${rand}`))
            }
        }
    }

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`reaksi_action_5`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`reaksi_action_5`), setup['reaksi_action_5'])

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`reaksi_action_6`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`reaksi_action_6`), setup['reaksi_action_6'])

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`reaksi_action_11`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`reaksi_action_11`), setup['reaksi_action_11'])

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey(`reaksi_saran`), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey(`reaksi_saran`), setup['reaksi_saran'])

    await timeout(1000)
    await driver.elementClick(byValueKey('btn_submit'))

    console.log("END RUNNING AUTOMATION TESTING LPJ TAHAP 1")
}

module.exports = {
    lpjTahap1
}