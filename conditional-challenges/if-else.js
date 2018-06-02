// Menggunakan if else
var nama = 'Mhari';
var peran = '';

if (nama == '' && peran == '') {
  console.log('Nama Harus Diisi!');
} else if (nama != '' && peran == '') {
  console.log('Halo ' + nama + ', Pilih Peranmu untuk memulai game!');
} else if (nama != '' && peran == 'Ksatria') {
  console.log('Halo ' + peran + ' ' + nama + ', Kamu dapat menyerang dengan senjatamu!');
} else if (nama != '' && peran == 'Tabib') {
  console.log('Halo ' + peran + ' ' + nama + ', Kamu akan membantu temanmu yang terluka.');
} else if (nama != '' && peran == 'Penyihir') {
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang akan membantu kemenanganmu!');
}