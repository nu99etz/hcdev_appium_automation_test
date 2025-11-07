const { byValueKey } = require("appium-flutter-finder");
const { authProcess } = require("./helper/auth");
const { initDriver } = require("./helper/init");
const { lpjAutomation } = require("./automation_module/lpj");

(async () => {
    const driver = await initDriver()
    const nik = '2095130'

    await authProcess(driver, nik, '123456')

    const tapMenu = byValueKey("menu_pertanggung_jawaban")
    await driver.elementClick(tapMenu) // klik ke menu lpj

    await lpjAutomation(driver, {
        'type': 'in_house_public',
        'is_admin': true,
        'lpj_tahap_1': {
            'picked11a': 3, // soal no 1
            'picked11b': 2, // soal no 2
            'picked11c': 1, // soal no 3
            'picked11d': 3, // soal no 4
            'picked11g': 0, // soal no 7A
            'picked12': 3, // soal no 7B
            'picked13a': 3, // soal no 7C
            'picked13b': 2, // soal no 8A
            'picked13c': 1, // soal no 8B
            'picked14a': 2, // soal no 8C
            'picked14b': 1, // soal no 9A
            'picked14c': 3, // soal no 9B
            'picked14d': 2, // soal no 9C
            'picked14e': 1, // soal no 9D
            'picked14f': 0, // soal no 9E
            'picked15': 2, // soal no 10
            'reaksi_action_5': 'yanto santoso', // soal no 5
            'reaksi_action_6': 'yanto yanto oke', // soal no 6
            'reaksi_action_11': 'marko marko', // soal no 11,
            'reaksi_saran': 'saran apa ya ?' // soal no 12
        },
        'lpj_tahap_2': {
            'resume_text': 'SK ini sangat auto test'
        },
        'lpj_tahap_3': {
            'dropdown_sk': 'SK Test Automation'
        },
        'lpj_tahap_4': {
            'picked31': 2, //soal no 1
            'picked32': 3, // soal no 2
            'picked33': 1, // soal no 3
            'picked34': 2, // soal no 4
            'picked35': 2, // soal no 5
            'efektivitas_action': 'no run',
            'efektivitas_saran': 'yanto run'
        },
        'lpj_tahap_5': {
            'controller41a': '4', // soal no 1 (only angka)
            'controller41b': '3', // soal no 2 (only angka)
            'controller41c': '3', // soal no 3 (only angka)
            'controller41d': '4', // soal no 4 (only angka)
            'controller41e': '5', // soal no 5 (only angka)
            'controller41f': '3', // soal no 6 (only angka)
        }
    })
})();