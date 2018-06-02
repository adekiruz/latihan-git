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