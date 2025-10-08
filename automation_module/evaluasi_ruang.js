const { byValueKey, byText, byType, bySemanticsLabel } = require('appium-flutter-finder');
const { timeout } = require('../helper/helper');

const evaluasiRuangAutomation = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING EVALUASI RUANG")

    await timeout(100)
    await driver.elementClick(byValueKey("evaluasi_ruang"))

    for (var start = 0; start < 3; start++) {
        await timeout(100)
        await driver.elementClick(byValueKey("pop_menu_list_evaluasi_0"))

        await timeout(100)
        await driver.elementClick(byValueKey('evaluasi_0'))

        await timeout(100)
        for (var i = 0; i < 4; i++) {
            var index = i + 1
            await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_ruang_${index}_${setup[`evaluasi_ruang_${index}`]}`), { alignment: 0.1 })
            await driver.elementClick(byValueKey(`key_evaluasi_ruang_${index}_${setup[`evaluasi_ruang_${index}`]}`))
        }

        await timeout(100)
        await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_ruang_5`), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey(`key_evaluasi_ruang_5`), setup['evaluasi_ruang_saran'])
        await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_ruang_6`), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey(`key_evaluasi_ruang_6`), setup['evaluasi_ruang_komentar'])

        await timeout(100)
        for (var i = 0; i < 3; i++) {
            var index = i + 1
            await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_petugas_${index}_${setup[`evaluasi_petugas_${index}`]}`), { alignment: 0.1 })
            await driver.elementClick(byValueKey(`key_evaluasi_petugas_${index}_${setup[`evaluasi_petugas_${index}`]}`))
        }

        await timeout(100)
        await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_petugas_4`), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey(`key_evaluasi_petugas_4`), setup['evaluasi_petugas_saran'])
        await driver.execute('flutter:scrollIntoView', byValueKey(`key_evaluasi_petugas_5`), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey(`key_evaluasi_petugas_5`), setup['evaluasi_petugas_komentar'])

        await timeout(100)
        await driver.elementClick(byValueKey('btnSubmit'))

        await timeout(2000)
        await driver.switchContext('NATIVE_APP')
        // await driver.elementClick(byValueKey("alert_tutup"))
        const closeButton = await driver.$("accessibility id:Tutup")
        await closeButton.click()

        await driver.switchContext('FLUTTER')
    }

    await setTimeout(async () => {
        console.log("DONE AUTOMATION TESTING EVALUASI RUANG")
        driver.deleteSession();
    }, 1000000)
}

module.exports = {
    evaluasiRuangAutomation
}