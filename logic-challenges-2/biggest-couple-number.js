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
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99