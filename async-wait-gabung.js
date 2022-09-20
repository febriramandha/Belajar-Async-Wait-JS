// Fungsi Promise yang akan dichaining
const gabungKata = (kataYangInginDigabung) => {
  // Hasil akhir dari fungsi ini adalah dengan
  // mengembalikan Promise
  return new Promise((resolve, reject) => {
    // Kondisi gagal
    if (kataYangInginDigabung === null) {
      reject('Maaf, katanya Error !');
    }
    // Kondisi terpenuhi
    else {
      resolve(kataYangInginDigabung);
    }
  });
};

const arrayKata = ['Hello', 'World', 'Coba', 'Gabung', 'Kata'];

// fungsi untuk menjalankannya harus diberikan kata async
// misalnya dibuat secara IIFE

// ini adalah contoh IIFE async function
// bila ingin declare manual bisa dengan
// const namaFungsi = async () => { ... }
(async () => {
  // Karena async / tidak memiliki catch
  // maka kita akan bungkus dengan try ... catch ... block
  try {
    // gunakan kata await untuk mendapatkan "data" hasil resolve-nya

    // ingat bahwa hasilPertama adalah resolved datanya dari gabungKata
    const hasilPertama = await gabungKata(arrayKata[0]);

    // ingat bahwa hasilGabungan1 adalah resolved chaining data dari hasilPertama
    const hasilGabungan1 = await gabungKata(hasilPertama + ' ' + arrayKata[1]);

    // ingat bahwa hasilGabungan2 adalah resolved chaining data dari hasilGabungan1
    const hasilGabungan2 = await gabungKata(
      hasilGabungan1 + ' ' + arrayKata[2]
    );

    // ingat bahwa hasilTotal adalah resolved chaining data dari hasilGabungan2
    const hasilTotal = await gabungKata(hasilGabungan2 + ' ' + arrayKata[3]);

    // setelah selesai semua, tinggal
    console.log(hasilTotal);
  } catch (err) {
    console.log(err);
  }
})();
