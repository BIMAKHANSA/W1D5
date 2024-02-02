// isi variabel wahana, usia dan saldo tidak boleh dirubah
// variabel tarif tidak boleh langsung di isi, gunakan proses untuk mengisinya

let wahana = "Wahana Utara";
let usia = 28;
let saldo = 180000;

// code here
let tarif;

if (wahana = "Wahana Utara") {
    if (usia >= 20) {
        tarif = 70000;
    } else {
        tarif = 50000;
    }
} else {
    if (usia < 20) {
        tarif = 90000;
    } else {
        tarif = 60000;
    }
} 
 let sisaSaldo = saldo - tarif;
 console.log(`Sisa saldo anda adalah RP ${sisaSaldo.toFixed(2)}. Selamat bermain!`)

 //


let wahana2 = "Wahana Selatan"
let usia2 = 8
let saldo2 = 140000

//


if (wahana2 = "Wahana Selatan") {
    if (usia2 >= 8) {
        tarif = 170000;
    } else {
        tarif = 50000;
    }
} else {
    if (usia2 < 8) {
        tarif = 90000;
    } else {
        tarif = 60000;
    }
} 
 let sisaSaldo2 = saldo2 - tarif;
 console.log(`Saldo anda kurang RP ${sisaSaldo.toFixed(2)}. Tidak cukup untuk membeli tiket`)

//

let wahana3 = "Wahana Barat"
let usia3 = 28
let saldo3 = 180000
//
if (wahana3 = "Wahana Barat") {
  console.log('Wahana tidak ditemukan')  
}
//
let usia4 = 1
//

if (wahana = "Wahana Utara") {
    if (usia4 >= 20) {
        tarif = 70000;
    } else {
        tarif = 50000;
    }
} else {
    console.log('Dilarang Masuk')
}