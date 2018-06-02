// LOGIC TARGET TERDEKAT
function targetTerdekat(arr) {
	var char = '';
	var count = 0;
	var countDiff = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != ' ' && char == '') {
			// set karakter pertama yg ditemukan
			// ini akan berisi x atau o tergantung mana dulu yg ketemu
			char = arr[i];
		}
		if (char != '') {
			if (arr[i] != char && arr[i] != ' ') {
				// hitung jumlah karakter yang berbeda dari karakter yg sudah ada di variable char
				countDiff++;
			}
			if (arr[i] == char) {
				// reset perhitungan jika perulangan menemukan karakter yg sama dengan karakter
				// yg sudah ada di variable char. intinya menghitung ulang
				count = 0;
				continue;
			}
			if (arr[i] != char && arr[i] != ' ') {
				// menghitung ketika perulangan bertemu dengan karakter yg berbeda dengan karakter
				// yg ada pada variable char. ini akan menjadi akhir dari perulangan
				count++;
				break;
			} else if (arr[i] != char && arr[i] == ' ') {
				// menghitung jika karakter dalam perulangan adalah spasi
				count++;
			}
		}
	}
	if (countDiff == 0) {
		// me-return 0 jika variable countDiff bernilai 0. ini artinya perulangan
		// tidak dapat menemukan karakter yg berbeda dengan karakter yg ada pada variable char
		// selain spasi atau karakter yg sama dengan yg ada pada variable char itu sendiri
		return 0;
	}
	return count;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2