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





// LOGIC MENGELOMPOKKAN ANGKA
function mengelompokkanAngka(arr) {
	var genap = [];
	var ganjil = [];
	var kelipatanTiga = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 3 == 0) {
			kelipatanTiga.push(arr[i]);
		} else {
			if (arr[i] % 2 == 0) {
				genap.push(arr[i]);
			} else {
				ganjil.push(arr[i]);
			}
		}
	}
	return [genap, ganjil, kelipatanTiga];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]





// LOGIC MENGELOMPOKKAN HEWAN
function groupAnimals(animals) {
	var alphabet = [];
	var tempArray = [];
	var newArray = [];
	for (var i = 0; i < animals.length; i++) {
		// proses pengambilan huruf pertama dari setiap kata dalam array
		if (alphabet.indexOf(animals[i][0]) != -1) {
			// jika huruf sudah ada lewati
			continue;
		} else {
			// jika belum masukkan
			alphabet.push(animals[i][0]);
		}
	}

	// mengurutkan huruf-huruf yg sudah dikumpulkan dari a-z
	alphabet.sort();
	
	for (var i = 0; i < alphabet.length; i++) {
		for (var u = 0; u < animals.length; u++) {
			if (alphabet[i] == animals[u][0]) {
				tempArray.push(animals[u]);
			}
		}

		newArray.push(tempArray);
	}

	return newArray;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]