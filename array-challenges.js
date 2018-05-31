// LOOPING DATA ARRAY
function dataHandling(arg) {
	for (var i = 0; i < arg.length; i++) {
		console.log('Nomor ID:', arg[i][0]);
		console.log('Nama Lengkap:', arg[i][1]);
		console.log('TTL:', arg[i][2] + ' ' + arg[i][3]);
		console.log('Hobi:', arg[i][4], '\n');
	}
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
dataHandling(input);





// BUILT-IN FUNCTION PADA ARRAY
function dataHandling2(arg){
	arg.splice(1, 1, 'Roman Alamsyah Elshawary');
	arg.splice(2, 1, 'Provinsi Bandar Lampung');
	arg.splice(4, 1, 'Pria', 'SMA Internasional Metro');
	console.log(arg);



	var bulan = arg[3].split('/');
	switch (bulan[1]) {
		case '01':
			console.log('Januari');
			break;
		case '02':
			console.log('Februari');
			break;
		case '03':
			console.log('Maret');
			break;
		case '04':
			console.log('April');
			break;
		case '05':
			console.log('Mei');
			break;
		case '06':
			console.log('Juni');
			break;
		case '07':
			console.log('Juli');
			break;
		case '08':
			console.log('Agustus');
			break;
		case '09':
			console.log('September');
			break;
		case '10':
			console.log('Oktober');
			break;
		case '11':
			console.log('November');
			break;
		case '12':
			console.log('Desember');
			break;
	}



	var bulanSort = bulan.slice();
	bulanSort.sort(function (a, b) {
		return b - a;
	});
	console.log(bulanSort);



	console.log(bulan.join('-'));



	var namaSliced = arg[1].slice(0, 15);
	console.log(namaSliced);
}
var input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input2);