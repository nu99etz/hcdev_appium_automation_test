const { byValueKey } = require("appium-flutter-finder");
const { authProcess } = require("./helper/auth");
const { initDriver } = require("./helper/init");
const { evaluasiRuangAutomation } = require("./automation_module/evaluasi_ruang");

(async () => {
    const driver = await initDriver()
    const nik = '2095130'

    await authProcess(driver, nik, '123456')

    const tapMenu = byValueKey("menu_peminjaman_fasilitas")
    await driver.elementClick(tapMenu) // klik ke menu training

    await driver.elementClick(byValueKey('btnPeminjamanRuang'))

    await timeout(100)
    await driver.elementClick(byValueKey("menu_peminjaman_ruang"))

    await evaluasiRuangAutomation(driver, {
      'evaluasi_ruang_1': '4',
      'evaluasi_ruang_2': '2',
      'evaluasi_ruang_3': '3',
      'evaluasi_ruang_4': '1',
      'evaluasi_ruang_saran': "lebih ke arus",
      'evaluasi_ruang_komentar': "yanto",
      'evaluasi_petugas_1': '4',
      'evaluasi_petugas_2': '2',
      'evaluasi_petugas_3': '3',
      'evaluasi_petugas_saran': "lebih ke arus",
      'evaluasi_petugas_komentar': "yanto",
    })
})();