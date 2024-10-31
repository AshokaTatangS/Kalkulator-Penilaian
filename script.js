const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;
const BATAS_LULUS = 60;

function validateInput(inputElement) {
    const nilai = parseFloat(inputElement.value);
    const errorMessage = inputElement.nextElementSibling;

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        errorMessage.innerText = "Harap masukkan angka dalam range 0-100";
    } else {
        errorMessage.innerText = "";
    }
}

function hitungNilai() {
    let tugas = parseFloat(document.getElementById("tugas").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);

    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Harap masukkan nilai yang valid untuk semua komponen.");
        return;
    }

    let nilaiAkhir = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);
    nilaiAkhir = nilaiAkhir.toFixed(2);

    let nilaiHuruf;
    if (nilaiAkhir >= 90) {
        nilaiHuruf = "A";
    } else if (nilaiAkhir >= 80) {
        nilaiHuruf = "B";
    } else if (nilaiAkhir >= 70) {
        nilaiHuruf = "C";
    } else if (nilaiAkhir >= 60) {
        nilaiHuruf = "D";
    } else {
        nilaiHuruf = "E";
    }

    let status = nilaiAkhir >= BATAS_LULUS ? "Lulus" : "Gagal";
    let statusClass = nilaiAkhir >= BATAS_LULUS ? "pass" : "fail";

    document.getElementById("contribution").innerText = `Tugas: ${tugas} * ${BOBOT_TUGAS * 100}% + UTS: ${uts} * ${BOBOT_UTS * 100}% + UAS: ${uas} * ${BOBOT_UAS * 100}%`;
    document.getElementById("average").innerText = `Nilai Akhir: ${nilaiAkhir}`;
    document.getElementById("grade").innerText = `Nilai Huruf: ${nilaiHuruf}`;
    let statusElement = document.getElementById("status");
    statusElement.innerText = `Status: ${status}`;
    statusElement.className = statusClass;
}
