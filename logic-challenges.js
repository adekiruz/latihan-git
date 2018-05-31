// LOGIC BANDINGKAN ANGKA
function bandingkanAngka(angka1, angka2) {
	if (angka1 == angka2) {
		return '-1';
	} else if (angka1 > angka2) {
		return false;
	} else if (angka1 < angka2) {
		return true;
	}
}
// TEST CASES
console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));





// LOGIC BALIK KATA
function balikKata(kata) {
	var index = kata.length - 1;
	var newKata = '';
	while (kata[index] != undefined) {
		newKata += kata[index];
		index--;
	}
	return newKata;
}
// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));





// LOGIC KONVERSI MENIT
function konversiMenit(menit) {
	var jam = menit / 60;
	var menit = menit % 60;
	return Math.floor(jam) + ':' + menit;
}
// TEST CASES
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));





// LOGIC X DAN O
function xo(string) {
	var x = 0;
	var o = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] == 'x') {
			x++;
		} else {
			o++;
		}
	}
	// console.log(o.length);
	if (x == o) {
		return true;
	} else {
		return false;
	}
}
// TEST CASES
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
