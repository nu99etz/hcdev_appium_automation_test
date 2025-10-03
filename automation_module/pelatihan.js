const { byValueKey, byText, byType } = require('appium-flutter-finder');

const pelatihanAutomation = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING PELATIHAN")

    if (setup['isPic'] == true) {
        await driver.elementClick(byValueKey("pelatihan_karyawan"))
    }

    const tapAjukkanPelatihan = byValueKey("ajukan_pelatihan")
    await driver.elementClick(tapAjukkanPelatihan)

    const buttonTambahPeserta = byValueKey("button_tambah_peserta")
    await driver.elementClick(buttonTambahPeserta)

    const listTambahPeserta = setup['tambah_peserta'] // tambah peserta

    for (var i = 0; i < listTambahPeserta.length; i++) {
        await driver.elementClick(byValueKey("add_peserta_" + listTambahPeserta[i]))
    }

    await driver.elementClick(byValueKey("pelatihan_peserta_dalam_back"))

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_sebagai'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_sebagai"))
    await driver.elementClick(byText(setup['sebagai']))

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_jenis_pelaksanaan'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_jenis_pelaksanaan"))
    await driver.elementClick(byText(setup['jenis_pelaksanaan']))

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_metode_pelaksanaan'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_metode_pelaksanaan"))
    await driver.elementClick(byText(setup['metode_pelaksanaan']))

    if (setup['isPic'] == true) {
        await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_kategori_pelaksanaan'), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_kategori_pelaksanaan"))
        await driver.elementClick(byText(setup['kategori_pelaksanaan']))
    }

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_jenis_diklat'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_jenis_diklat"))
    await driver.elementClick(byText(setup['jenis_diklat']['jenis_diklat']))

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_diklat_karyawan'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_diklat_karyawan"))
    await driver.elementClick(byText(setup['jenis_diklat']['diklat_karyawan']))

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_keategori"), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_data_keategori"))
    await driver.elementClick(byText(setup['kompetensi']['data_kategori']))

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_job_family"), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_data_job_family"))
    await driver.elementClick(byText(setup['kompetensi']['data_job_family']))

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_job_function"), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_data_job_function"))
    await driver.elementClick(byText(setup['kompetensi']['data_job_function']))

    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_kompetensi"), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_data_kompetensi"))
    await driver.elementClick(byText(setup['kompetensi']['data_kompetensi']))

    await driver.execute('flutter:scrollIntoView', byValueKey('pelatihan_text'), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("pelatihan_text"), setup['judul_pelatihan'])

    if (setup['isPic']) {
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_vendor"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_vendor"))
        if (setup['vendor']['vendor_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['vendor']['vendor_search'])
        }
        await driver.elementClick(byText(setup['vendor']['nama_vendor']))

        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_venor_kategori"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_venor_kategori"))
        if (setup['vendor']['kategori_vendor_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['vendor']['kategori_vendor_search'])
        }
        await driver.elementClick(byText(setup['vendor']['kategori_vendor']))
    }

    await driver.execute('flutter:scrollIntoView', byValueKey('switch_partial_date'), { alignment: 0.1 })

    if (setup['isPartialDate'] == true) {
        await driver.elementClick(byValueKey("switch_partial_date"))
        // untuk ini stop dulu karena belum ketemu
        await driver.elementClick(byValueKey("tanggal_pelaksanaan_partial_date"))
        await driver.elementClick(byValueKey("cell_30_9_2025"))
        await driver.elementClick(byValueKey("buttonPilih"))
    } else {
        await driver.elementClick(byValueKey("template_tgl_pelaksanaan_text"))
        await driver.elementClick(byText(setup['tanggal_mulai']))
        await driver.elementClick(byText("OK"))

        await driver.elementClick(byValueKey("template_tgl_selesai_text"))
        await driver.elementClick(byText(setup['tanggal_selesai']))
        await driver.elementClick(byText("OK"))

        await driver.execute('flutter:scrollIntoView', byValueKey("durasi_pelatihan_per_hari"), { alignment: 0.1 })
        await driver.elementSendKeys(byValueKey("durasi_pelatihan_per_hari"), setup['durasi_pelatihan'])
    }

    await driver.execute('flutter:scrollIntoView', byValueKey("peyelenggara_pelatihan"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("peyelenggara_pelatihan"), setup['penyelenggara'])

    await driver.execute('flutter:scrollIntoView', byValueKey("lokasi_pelaksanaan_pelatihan"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("lokasi_pelaksanaan_pelatihan"), setup['lokasi'])

    if (setup['isPic'] == true) {
        await driver.execute('flutter:scrollIntoView', byValueKey("nominal_voucher"), { alignment: 0.1 })
        if (setup['voucher']['dengan_expired'] == 1) {
            await driver.elementClick(byValueKey("dengan_expired"))
        }
        await driver.elementSendKeys(byValueKey("nominal_voucher"), '4000')
        if (setup['voucher']['dengan_expired'] == 1) {
            await driver.elementClick(byValueKey("expired_date"))
            await driver.elementClick(byText(setup['voucher']['tanggal_expired_voucher']))
            await driver.elementClick(byText("OK"))
        }
    }

    await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_uhpd"), { alignment: 0.1 })
    await driver.elementClick(byValueKey("estimasi_biaya_uhpd"))
    await driver.elementClick(byValueKey("estimasi_biaya_lainnya"))

    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_0"), "YANTO TESTING")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_0"), "5")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_0"), "5000")

    await driver.elementClick(byValueKey("tambah_baris_button"))

    await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_other_nama_item_1"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_1"), "YANTO TESTING 1")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_1"), "9")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_1"), "5000")

    await driver.elementClick(byValueKey("tambah_baris_button"))

    await driver.execute('flutter:scrollIntoView', byValueKey("estimasi_biaya_other_nama_item_2"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_nama_item_2"), "YANTO TESTING 2")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_other_item_2"), "19")
    await driver.elementSendKeys(byValueKey("estimasi_biaya_total_item_2"), "50000")

    if (setup['isPic'] == true) {
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_departemen"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_departemen"))
        if (setup['departemen_anggaran']['departemen_anggaran_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['departemen_anggaran']['departemen_anggaran_search'])
        }
        await driver.elementClick(byText(setup['departemen_anggaran']['departemen_anggaran']))

        await driver.execute('flutter:scrollIntoView', byValueKey("petugas_perencanaan"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("petugas_perencanaan"))
        if (setup['petugas_perencanaan_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['petugas_perencanaan_search'])
        }
        await driver.elementClick(byText(setup['petugas_perencanaan']))

        await driver.elementSendKeys(byValueKey("komentar_text"), setup['komentar'])
    } else {
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_pilih_approver"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_pilih_approver"))
        await driver.elementClick(byText(setup['approver']))
    }

    setInterval(() => {
        console.log("DONE AUTOMATION TESTING PELATIHAN")
        driver.deleteSession();
    }, 1000000)
}

module.exports = {
    pelatihanAutomation
}