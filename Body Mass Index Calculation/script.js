document.getElementById("hitungBtn").addEventListener("click", function () {
  let berat = parseFloat(document.getElementById("berat").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(berat) || isNaN(tinggi)) {
    alert("Mohon masukkan berat badan dan tinggi badan dengan benar!");
    return;
  }

  let bmi = berat / (tinggi * tinggi);
  let keterangan = "";

  if (bmi < 18.5) {
    keterangan = "Berat badan kurang";
  } else if (bmi >= 18.5 && bmi < 25) {
    keterangan = "Berat badan ideal";
  } else if (bmi >= 25 && bmi < 30) {
    keterangan = "Berat badan berlebih";
  } else {
    keterangan = "Obesitas";
  }

  let hasilElement = document.getElementById("hasil");
  hasilElement.innerHTML = `BMI Anda: ${bmi.toFixed(
    2
  )}<br>Keterangan: ${keterangan}`;
});
