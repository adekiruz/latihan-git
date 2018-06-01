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



var hari = 12;
var bulan = 2;
var tahun = 2018;

switch (bulan) {
  case 1: console.log(hari + ' Januari ' + tahun); break;
  case 2: console.log(hari + ' Februari ' + tahun); break;
  case 3: console.log(hari + ' Maret ' + tahun); break;
  case 4: console.log(hari + ' April ' + tahun); break;
  case 5: console.log(hari + ' Mei ' + tahun); break;
  case 6: console.log(hari + ' Juni ' + tahun); break;
  case 7: console.log(hari + ' Juli ' + tahun); break;
  case 8: console.log(hari + ' Agustus ' + tahun); break;
  case 9: console.log(hari + ' September ' + tahun); break;
  case 10: console.log(hari + ' Oktober ' + tahun); break;
  case 11: console.log(hari + ' November ' + tahun); break;
  case 12: console.log(hari + ' Desember ' + tahun); break;
}