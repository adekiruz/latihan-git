// LOGIC PALINDROME
function palindrome(kata) {
	var index = kata.length - 1;
	var newKata = '';
	while (kata[index] != undefined) {
		newKata += kata[index];
		index--;
	}
	if (kata == newKata) {
		return true;
	} else {
		return false;
	}
}
// TEST CASES
console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));





// LOGIC PALINDROME NUMBER
function angkaPalindrome(num) {
	function cekPalindrome(number) {
		var a = 0;
		var num2 = 0;
		var fromArg = number;
		while (number > 0) {
			a = number % 10;
			number = parseInt(number / 10);
			num2 = num2 * 10 + a;
		}
		if (num2 == fromArg) {
			return true;
		} else {
			return false;
		}
	}
	var palin = false;
	var palinNum = 0;
	while (palin != true) {
		if (cekPalindrome(++num)) {
			palin = true;
			palinNum = num;
		}
	}
	return palinNum;
}
// TEST CASES
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));





// LOGIC MENGHITUNG JUMLAH KATA
function hitungJumlahKata(kalimat) {
	var jumlahKata = kalimat.split(' ');
	return jumlahKata.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));





// LOGIC PASANGAN ANGKA TERBESAR
function pasanganTerbesar(num) {
	num = num.toString();
	var arrayNum = [];
	for (var i = 0; i < num.length; i++) {
		arrayNum.push(num[i]);
	}
	var biggestNum = Math.max(...arrayNum);
	for (var i = 0; i < arrayNum.length; i++) {
		if (arrayNum[i] == biggestNum) {
			biggestNum = biggestNum + arrayNum[i + 1];
			break;
		}
	}
	return biggestNum;
}

// TEST CASES
console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293));
