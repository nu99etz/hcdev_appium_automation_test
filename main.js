const wdio = require('webdriverio');
const assert = require('assert');
const readline = require('node:readline');
const { byValueKey, byText, bySemanticsLabel, byType, byTooltip } = require('appium-flutter-finder');
require('dotenv').config()

const osSpecificOps = {
  'platformName': process.env.APPIUM_PLATFORM_NAME,
  'appium:deviceName': process.env.APPIUM_DEVICE_NAME,
  'appium:app': process.env.APPIUM_APP_LOCATION,
}

const opts = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    'appium:automationName': process.env.APPIUM_AUTOMATION_NAME,
    'appium:retryBackoffTime': 500
  }
};

const {
  authProcess
} = require('./helper/auth');
const { getElementId } = require('wd/lib/utils');
const { pelatihanAutomation } = require('./automation_module/pelatihan');
const { sertifikasiAutomation } = require('./automation_module/sertifikasi');
const { timeout } = require('./helper/helper');
const { evaluasiRuangAutomation } = require('./automation_module/evaluasi_ruang');

(async () => {

  const driver = await wdio.remote(opts);
  const nik = "2095130"; // nik yang mau login
  const menu = 'sertifikasi'

  // authenticator
  await authProcess(driver, nik, "123456") // proses login

  if (menu == 'training') {
    const tapMenu = byValueKey("menu_training")
    await driver.elementClick(tapMenu) // klik ke menu training

    pelatihanAutomation(driver, {
      'isPic': false,
      'tambah_peserta': [
        '2095133',
        '2095139',
        '2095140'
      ],
      'isPartialDate': true,
      'sebagai': 'Peserta',
      'jenis_pelaksanaan': 'In House Training',
      'metode_pelaksanaan': 'Offline (Luring)',
      'kategori_pelaksanaan': 'Pengembangan',
      'jenis_diklat': {
        'jenis_diklat': 'Diklat Karyawan',
        'diklat_karyawan': 'Sertifikasi',
      },
      'kompetensi': {
        'data_kategori': 'Kompetensi Teknis',
        'data_job_family': 'IT & Data Analytics',
        'data_job_function': 'Data Analytics',
        'data_kompetensi': 'Data Analytics',
      },
      'judul_pelatihan': 'Pelatihan Yanto',
      'vendor': {
        'vendor_search': 'Telkom',
        'nama_vendor': 'Telkom Surabaya',
        'kategori_vendor_search': 'Test',
        'kategori_vendor': 'Tester',
      },
      'partial_dates': [
        'Wed, 08 October 2025',
        'Sun, 12 October 2025'
      ],
      'tanggal_mulai': "4",
      'tanggal_selesai': "7",
      'durasi_pelatihan': "3",
      'penyelenggara': 'Yanto Auto Test',
      'lokasi': 'Nusakambangan',
      'voucher': {
        'dengan_expired': 0,
        'tanggal_expired_voucher': '5'
      },
      'departemen_anggaran': {
        'departemen_anggaran_search': 'D51000',
        'departemen_anggaran': 'D51000 Dep Keuangan ( 66293960 )'
      },
      'petugas_perencanaan_search': 'ARIEF NOVANSA',
      'petugas_perencanaan': 'ARIEF NOVANSA DWI PUTRA',
      'komentar': 'yanto',
      'approver': "MAFTOCH, S.T. - 2105102"
    })
  } else if (menu == 'sertifikasi') {
    const tapMenu = byValueKey("menu_sertifikasi")
    await driver.elementClick(tapMenu) // klik ke menu training

    sertifikasiAutomation(driver, {
      'isPic': false,
      'tambah_peserta': [
        '2095133',
        '2095139',
        '2095140'
      ],
      'isPartialDate': true,
      'sebagai': 'Peserta',
      'jenis_pelaksanaan': 'In House Training',
      'metode_pelaksanaan': 'Offline (Luring)',
      'kompetensi': {
        'data_kategori': 'Kompetensi Teknis',
        'data_job_family': 'IT & Data Analytics',
        'data_job_function': 'Data Analytics',
        'data_kompetensi': 'Data Analytics',
      },
      'judul_sertifikasi': 'Sertifikasi Yanto',
      'lembaga_penerbit': 'BNSP',
      'vendor': {
        'vendor_search': 'Telkom',
        'nama_vendor': 'Telkom Surabaya',
        'kategori_vendor_search': 'Test',
        'kategori_vendor': 'Tester',
      },
      'partial_dates': [
        'Wed, 08 October 2025',
        'Sun, 12 October 2025'
      ],
      'tanggal_mulai': "4",
      'tanggal_selesai': "7",
      'durasi_pelatihan': "3",
      'penyelenggara': 'Yanto Auto Test',
      'lokasi': 'Nusakambangan',
      'contact_person': {
        'contact_person': 'Yanto',
        'nomor_hp_cp': '0489849394'
      },
      'tujuan_mengikuti_sertifikasi': 'Biar pintar',
      'materi_sertifikasi': 'Yanto mengajarkan bagaimana belajar mengguunakan pesawat ulak alik',
      'masa_berlaku_sertifikasi': '10',
      'voucher': {
        'dengan_expired': 0,
        'tanggal_expired_voucher': '5'
      },
      'departemen_anggaran': {
        'departemen_anggaran_search': 'D51000',
        'departemen_anggaran': 'D51000 Dep Keuangan ( 66293960 )'
      },
      'petugas_perencanaan_search': 'ARIEF NOVANSA',
      'petugas_perencanaan': 'ARIEF NOVANSA DWI PUTRA',
      'komentar': 'yanto',
      'approver': "MAFTOCH, S.T. - 2105102"
    })
  } else if(menu == 'evaluasi_ruangan') {
    const tapMenu = byValueKey("menu_peminjaman_fasilitas")
    await driver.elementClick(tapMenu) // klik ke menu training

    await driver.elementClick(byValueKey('btnPeminjamanRuang'))

    await timeout(100)
    await driver.elementClick(byValueKey("menu_peminjaman_ruang"))

    evaluasiRuangAutomation(driver, {
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
  }
})();
