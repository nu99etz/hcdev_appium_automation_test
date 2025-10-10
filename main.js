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
const { lpjAutomation } = require('./automation_module/lpj');

(async () => {

  const driver = await wdio.remote(opts);
  const nik = "admin"; // nik yang mau login
  const menu = 'lpj'

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
        'Fri, 10 October 2025',
        'Mon, 13 October 2025'
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
      'isPartialDate': false,
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
  } else if (menu == 'evaluasi_ruangan') {
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
  } else if (menu == 'lpj') {
    const tapMenu = byValueKey("menu_pertanggung_jawaban")
    await driver.elementClick(tapMenu) // klik ke menu lpj

    lpjAutomation(driver, {
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
  }
})();
