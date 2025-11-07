const { byValueKey } = require("appium-flutter-finder");
const { authProcess } = require("./helper/auth");
const { initDriver } = require("./helper/init");
const { pelatihanAutomation } = require("./automation_module/pelatihan");

(async () => {
    const driver = await initDriver()
    const nik = '2095130'

    await authProcess(driver, nik, '123456')

    const tapMenu = byValueKey("menu_training")
    await driver.elementClick(tapMenu) // klik ke menu training

    await pelatihanAutomation(driver, {
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
})();