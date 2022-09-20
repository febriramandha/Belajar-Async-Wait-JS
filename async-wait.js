const fs = require('fs/promises');

const dataUntukDitulis = { message: 'halo dunia' };

// Di sini harus dijadikan string
const stringDataUntukDitulis = JSON.stringify(dataUntukDitulis);

// Menerima 2 parameter
// Parameter ke-1 adalah nama file
// Parameter ke-2 adalah data yang ingin dituliskan
// Perhatikan bahwa data yang dituliskan HARUS dalam bentuk string
fs.writeFile('./dummy.json', stringDataUntukDitulis)
  .then((successResult) => {
    // hasilnya seharusnya undefined
    // karena fs.writeFile tidak menhasilkan kembalian apapun
    console.log(successResult);
  })
  .catch((err) => {
    // apabila ada error maka akan dituliskan di sini
    console.log(err);
  });

// Kemudian misalnya sekarang kita ingin mebaca file yang dituliskan
fs.readFile('./dummy.json', 'utf8')
  // resolved
  .then((dataHasilBacaan) => {
    // Ingat dataHasilBacaan adalah "string"
    console.log(dataHasilBacaan);
  })
  // rejected
  .catch((err) => {
    console.log(err);
  });

// ------------
// MAGIC DIMULAI DARI SINI
// Bagaimanakah bila ingin dibuat versi async awaitnya?
// membuat sebuah fungsi yang dideklarasi dengan keyword "async"
const main = async () => {
  // async / await tidak memiliki catch bawaan
  // sehingga harus dibungkus dalam try ... catch ... block
  try {
    // bungkus semua logic "dunia sempurna"-nya di sini
    // Anggap aja untuk semua kondisi berhasilnya

    let dataHasilBacaan = await fs.readFile('./dummy.json', 'utf8');
    // supaya bisa jadi object javascript?
    dataHasilBacaan = JSON.parse(dataHasilBacaan);

    console.log(dataHasilBacaan);
  } catch (err) {
    // Apabila ada terjadi error / rejected, akan masuk ke sini
    console.log(err);
  }
};

// jalankan kode
main();
