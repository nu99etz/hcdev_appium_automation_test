const { byValueKey, byText, byType } = require('appium-flutter-finder');
const { timeout } = require('../helper/helper');

const sertifikasiAutomation = async (driver, setup = {}) => {

    console.log("BEGIN RUNNING AUTOMATION TESTING SERTIFIKASI")

    if (setup['isPic'] == true) {
        await driver.elementClick(byValueKey("sertifikasi_karyawan"))
    }

    await driver.elementClick(byValueKey('ajukan_sertifikasi'))
    await driver.elementClick(byValueKey('ajukkan_pelatihan_dalam'))

    await driver.elementClick(byValueKey("button_tambah_peserta"))

    const listTambahPeserta = setup['tambah_peserta'] // tambah peserta

    for (var i = 0; i < listTambahPeserta.length; i++) {
        await driver.elementClick(byValueKey("add_peserta_" + listTambahPeserta[i]))
    }

    await driver.elementClick(byValueKey("sertifikasi_peserta_dalam_back"))

    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_pilih_sebagai'), { alignment: 0.1 })

    await driver.elementClick(byValueKey("dropdown_pilih_sebagai"))
    await driver.elementClick(byText(setup['sebagai']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_jenis_pelaksanaan'), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_jenis_pelaksanaan"))
    await driver.elementClick(byText(setup['jenis_pelaksanaan']))
    
    await driver.execute('flutter:scrollIntoView', byValueKey('judul_sertifikasi'), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("judul_sertifikasi"), setup['judul_sertifikasi'])

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_lembaga_penerbit'), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_lembaga_penerbit"))
    await driver.elementClick(byText(setup['lembaga_penerbit']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_keategori"), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_data_keategori"))
    await driver.elementClick(byText(setup['kompetensi']['data_kategori']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_job_family"), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_data_job_family"))
    await driver.elementClick(byText(setup['kompetensi']['data_job_family']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_job_function"), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_data_job_function"))
    await driver.elementClick(byText(setup['kompetensi']['data_job_function']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_data_kompetensi"), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_data_kompetensi"))
    await driver.elementClick(byText(setup['kompetensi']['data_kompetensi']))

    await timeout(1000)
    await driver.execute('flutter:scrollIntoView', byValueKey('dropdown_metode_pelaksanaan'), { alignment: 0.1 })
    await driver.elementClick(byValueKey("dropdown_metode_pelaksanaan"))
    await driver.elementClick(byText(setup['metode_pelaksanaan']))

    await driver.execute('flutter:scrollIntoView', byValueKey("lembaga_provider_text"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("lembaga_provider_text"), setup['penyelenggara'])

    await driver.execute('flutter:scrollIntoView', byValueKey("lokasi_pelaksanaan"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("lokasi_pelaksanaan"), setup['lokasi'])

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
    }

    await driver.execute('flutter:scrollIntoView', byValueKey("nama_contact_person"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("nama_contact_person"), setup['contact_person']['contact_person'])

    await driver.execute('flutter:scrollIntoView', byValueKey("nomor_hp_cp"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("nomor_hp_cp"), setup['contact_person']['nomor_hp_cp'])

    await driver.execute('flutter:scrollIntoView', byValueKey("tujuan_mengikuti"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("tujuan_mengikuti"), setup['tujuan_mengikuti_sertifikasi'])

    await driver.execute('flutter:scrollIntoView', byValueKey("materi_sertifikasi"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("materi_sertifikasi"), setup['materi_sertifikasi'])

    await driver.execute('flutter:scrollIntoView', byValueKey("masa_berlaku_sertifikasi"), { alignment: 0.1 })
    await driver.elementSendKeys(byValueKey("masa_berlaku_sertifikasi"), setup['masa_berlaku_sertifikasi'])

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

        await timeout(1000)
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_vendor"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_vendor"))
        if (setup['vendor']['vendor_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['vendor']['vendor_search'])
        }
        await driver.elementClick(byText(setup['vendor']['nama_vendor']))

        await timeout(1000)
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_venor_kategori"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_venor_kategori"))
        if (setup['vendor']['kategori_vendor_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['vendor']['kategori_vendor_search'])
        }
        await driver.elementClick(byText(setup['vendor']['kategori_vendor']))

        await driver.elementClick(byValueKey("bebas_clocking"))
        await driver.elementClick(byText("Ya"))
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
        await timeout(1000)
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_departemen"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_departemen"))
        if (setup['departemen_anggaran']['departemen_anggaran_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['departemen_anggaran']['departemen_anggaran_search'])
        }
        await driver.elementClick(byText(setup['departemen_anggaran']['departemen_anggaran']))

        await timeout(1000)
        await driver.execute('flutter:scrollIntoView', byValueKey("petugas_perencanaan"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("petugas_perencanaan"))
        if (setup['petugas_perencanaan_search'] != undefined) {
            await driver.elementSendKeys(byType('TextField'), setup['petugas_perencanaan_search'])
        }
        await driver.elementClick(byText(setup['petugas_perencanaan']))

        await driver.elementSendKeys(byValueKey("komentar_text"), setup['komentar'])
    } else {
        await timeout(1000)
        await driver.execute('flutter:scrollIntoView', byValueKey("dropdown_pilih_approver"), { alignment: 0.1 })
        await driver.elementClick(byValueKey("dropdown_pilih_approver"))
        await driver.elementClick(byText(setup['approver']))
    }

    setInterval(() => {
        console.log("DONE AUTOMATION TESTING SERTIFIKASI")
        driver.deleteSession();
    }, 1000000)
}

module.exports = {
    sertifikasiAutomation
}