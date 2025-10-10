const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../helper/helper');
const { lpjTahap1 } = require('./lpj/lpj_tahap1');
const { lpjTahap2 } = require('./lpj/lpj_tahap2');
const { lpjTahap4 } = require('./lpj/lpj_tahap4');
const { lpjTahap3 } = require('./lpj/lpj_tahap3');
const { lpjTahap5 } = require('./lpj/lpj_tahap5');

const lpjAutomation = async (driver, setup = {}) => {

    console.log("BEGIN AUTOMATION TESTING LPJ")

    await driver.elementClick(byValueKey("menu_lpj_pelatihan"))

    if(setup['type'] == 'in_house_public') {
        await timeout(1000)
        await driver.elementClick(byValueKey("tab_in_house_public"))
    }
    
    await timeout(1000)
    await driver.elementClick(byValueKey("btn_filter"))

    await timeout(1000)
    await driver.elementClick(byValueKey("dropdown_tahap"))

    await timeout(1000)
    await driver.elementClick(byText("Tahap Evaluasi Reaksi"))

    await timeout(1000)
    await driver.elementClick(byValueKey("value_btn_filter"))

    await timeout(1000)
    await driver.elementClick(byValueKey("option_menu_evaluasi_0"))

    if(setup['is_admin'] == false) {
        await driver.elementClick(byValueKey("isi_evaluasi_0"))
    } else {
        await driver.elementClick(byValueKey("list_peserta_0"))
        await timeout(1000)
        await driver.elementClick(byValueKey("isi_lpj_0"))
    }

    await timeout(1000)
    await lpjTahap1(driver, setup['lpj_tahap_1'])

    await timeout(1000)
    await driver.switchContext('NATIVE_APP')
    await driver.$("accessibility id:Tutup").click()

    await driver.switchContext('FLUTTER')

    await timeout(5000)
    await lpjTahap2(driver, setup['lpj_tahap_2'])

    await timeout(1000)
    await driver.switchContext('NATIVE_APP')
    await driver.$("accessibility id:Tutup").click()

    await driver.switchContext('FLUTTER')

    if(setup['type'] == 'in_house_public') {
        await timeout(5000)
        await lpjTahap3(driver, setup['lpj_tahap_3'])

        await timeout(1000)
        await driver.switchContext('NATIVE_APP')
        await driver.$("accessibility id:Tutup").click()

        await driver.switchContext('FLUTTER')
    }

    if(setup['is_admin'] == true) {
        await timeout(5000)
        await lpjTahap4(driver, setup['lpj_tahap_4'])
    
        await timeout(1000)
        await driver.switchContext('NATIVE_APP')
        await driver.$("accessibility id:Tutup").click()
    
        await driver.switchContext('FLUTTER')
    
        await timeout(5000)
        await lpjTahap5(driver, setup['lpj_tahap_5'])
    
        await timeout(1000)
        await driver.switchContext('NATIVE_APP')
        await driver.$("accessibility id:Tutup").click()
    
        await driver.switchContext('FLUTTER')
        
    }

    await timeout(1000)
    await driver.elementClick(byValueKey('button_back_key'))

    await timeout(10000)
    console.log("DONE AUTOMATION TESTING LPJ")
    driver.deleteSession();
}

module.exports = {
    lpjAutomation
}