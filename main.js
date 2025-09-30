const wdio = require('webdriverio');
const assert = require('assert');
const { byValueKey, byText, bySemanticsLabel, byType, byTooltip } = require('appium-flutter-finder');

const osSpecificOps = {
  'platformName': 'Android',
  'appium:deviceName': 'SM G998B',
  'appium:app': '/Users/nugraha/Project/mobile/hcdev_petrokimia/build/app/outputs/apk/release/app-release.apk',
}

const opts = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    'appium:automationName': 'Flutter',
    'appium:retryBackoffTime': 500
  }
};

const {
  authProcess
} = require('./helper/auth');
const { getElementId } = require('wd/lib/utils');

(async () => {

  const driver = await wdio.remote(opts);

  const partialDate = 0
  const nik = "2115554"; // nik yang mau login
  const denganExpired = 1

  console.log("BEGIN RUNNING AUTOMATION TESTING PELATIHAN")

  // authenticator
  await authProcess(driver, nik, "123456") // proses login

  const tapMenu = byValueKey("menu_training")
  await driver.elementClick(tapMenu) // klik ke menu training

  if(nik == '2115554') {
    await driver.elementClick(byValueKey("pelatihan_karyawan"))
  }

  const tapAjukkanPelatihan = byValueKey("ajukan_pelatihan")
  await driver.elementClick(tapAjukkanPelatihan)

  const buttonTambahPeserta = byValueKey("button_tambah_peserta")
  await driver.elementClick(buttonTambahPeserta)

  const listTambahPeserta = ['2095133', '2095139'] // tambah peserta

  for(var i = 0; i < listTambahPeserta.length; i++) {
    await driver.elementClick(byValueKey("add_peserta_" + listTambahPeserta[i]))
  }

  await driver.elementClick(byValueKey("pelatihan_peserta_dalam_back"))

  await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_sebagai'), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_sebagai"))
  await driver.elementClick(byText("Peserta"))

  await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_jenis_pelaksanaan'), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_jenis_pelaksanaan"))
  await driver.elementClick(byText("In House Training"))

  await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_metode_pelaksanaan'), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_metode_pelaksanaan"))
  await driver.elementClick(byText("Offline (Luring)"))

  if(nik == '2115554') {
    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_kategori_pelaksanaan'), {alignment: 0.1})
    await driver.elementClick(byValueKey("dropdown_kategori_pelaksanaan"))
    await driver.elementClick(byText("Pengembangan"))
  }

  await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_jenis_diklat'), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_jenis_diklat"))
  await driver.elementClick(byText("Diklat Karyawan"))

  await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_diklat_karyawan'), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_diklat_karyawan"))
  await driver.elementClick(byText("Sertifikasi"))

  await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_keategori"), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_data_keategori"))
  await driver.elementClick(byText("Kompetensi Teknis"))

  await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_job_family"), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_job_family"))
  await driver.elementClick(byText("Legal"))

  await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_job_function"), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_data_job_function"))
  await driver.elementClick(byText("Legal Counsel"))

  await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_kompetensi"), {alignment: 0.1})

  await driver.elementClick(byValueKey("dropdown_data_kompetensi"))
  await driver.elementClick(byText("Litigation & Dispute Resolution Law"))

  await driver.execute('flutter:scrollIntoView', byValueKey('pelatihan_text'), {alignment: 0.1})
  await driver.elementSendKeys(byValueKey("pelatihan_text"), "Pelatihan Yanto")

  if(nik == '2115554') {
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_vendor"), {alignment: 0.1})
    await driver.elementClick(byValueKey("dropdown_vendor"))
    await driver.elementSendKeys(byType('TextField'), 'Telkom')
    await driver.elementClick(byText("Telkom Surabaya"))

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_venor_kategori"), {alignment: 0.1})
    await driver.elementClick(byValueKey("dropdown_venor_kategori"))
    await driver.elementSendKeys(byType('TextField'), 'Ionic')
    await driver.elementClick(byText("Topik Ionic"))
  }

  await driver.execute('flutter:scrollIntoView', byValueKey('pelatihan_date'), {alignment: 0.1})

  if(partialDate == 1) {
    await driver.elementClick(byValueKey("pelatihan_date"))
  }

  if(partialDate != 1) {
    await driver.elementClick(byValueKey("tanggal_pelaksanaan_mulai"))
    await driver.elementClick(byText("30"))
    await driver.elementClick(byText("OK"))
  
    await driver.elementClick(byValueKey("tanggal_pelaksanaan_selesai"))
    await driver.elementClick(byText("1"))
    await driver.elementClick(byText("OK"))
  
    await driver.execute('flutter:scrollIntoView', byValueKey("durasi_pelatihan_per_hari"), {alignment: 0.1})
    await driver.elementSendKeys(byValueKey("durasi_pelatihan_per_hari"), "5")
  } else {
    await driver.elementClick(byValueKey("tanggal_pelaksanaan_partial_date"))
    await driver.elementClick(byValueKey("cell_30_9_2025"))
    await driver.elementClick(byValueKey("buttonPilih"))
  }

  await driver.execute('flutter:scrollIntoView', byValueKey("peyelenggara_pelatihan"), {alignment: 0.1})
  await driver.elementSendKeys(byValueKey("peyelenggara_pelatihan"), "PT YANTO SEJATI")

  await driver.execute('flutter:scrollIntoView', byValueKey("lokasi_pelaksanaan_pelatihan"), {alignment: 0.1})
  await driver.elementSendKeys(byValueKey("lokasi_pelaksanaan_pelatihan"), "LOKASI SURAYA")

  if(nik == '2115554') {
    await driver.execute('flutter:scrollIntoView', byValueKey("nominal_voucher"), {alignment: 0.1})
    if(denganExpired) {
      await driver.elementClick(byValueKey("dengan_expired"))
    }
    await driver.elementSendKeys(byValueKey("nominal_voucher"), '4000')
    if(denganExpired) {
      await driver.elementClick(byValueKey("expired_date"))
      await driver.elementClick(byText("30"))
      await driver.elementClick(byText("OK"))
    }

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_vendor"), {alignment: 0.1})
    await driver.elementClick(byValueKey("dropdown_vendor"))
    await driver.elementSendKeys(byType('TextField'), 'Biznet')
    await driver.elementClick(byText("Biznet Surabaya"))
  }

  await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_uhpd"), {alignment: 0.1})
  await driver.elementClick(byValueKey("estimasi_biaya_uhpd"))
  await driver.elementClick(byValueKey("estimasi_biaya_lainnya"))

  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_0"), "YANTO TESTING")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_0"), "5")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_0"), "5000")

  await driver.elementClick(byValueKey("tambah_baris_button"))

  await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_other_nama_item_1"), {alignment: 0.1})
  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_1"), "YANTO TESTING 1")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_1"), "9")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_1"), "5000")

  await driver.elementClick(byValueKey("tambah_baris_button"))

  await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_other_nama_item_2"), {alignment: 0.1})
  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_2"), "YANTO TESTING 2")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_2"), "19")
  await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_2"), "50000")

  await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_uhpd"), {alignment: 0.1})
  
  await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_departemen"), {alignment: 0.1})
  await driver.elementClick(byValueKey("dropdown_departemen"))
  await driver.elementSendKeys(byType('TextField'), 'Dep')
  await driver.elementClick(byText(" Departemen masing - masing"))

  if(nik == '2115554') {
    await driver.execute('flutter:scrollIntoView', byValueKey("petugas_perencanaan"), {alignment: 0.1})
    await driver.elementClick(byValueKey("petugas_perencanaan"))
    await driver.elementSendKeys(byType('TextField'), 'Arief')
    await driver.elementClick(byText("PANDU DWIPANATA"))

    await driver.elementSendKeys(byValueKey("komentar_text"), "Yanto")
  } else {
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_pilih_approver"), {alignment: 0.1})
    await driver.elementClick(byValueKey("dropdown_pilih_approver"))
    await driver.elementClick(byText("ISWINARDI - 2904692"))
  }

  console.log("DONE AUTOMATION TESTING PELATIHAN")

  setInterval(() => {
    console.log("DONE AUTOMATION TESTING PELATIHAN")
    driver.deleteSession();
  }, 1000000)
})();
