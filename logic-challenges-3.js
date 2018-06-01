// LOGIC MENCARI MEAN
function cariMean(arr) {
	var sum = 0;
	arr.forEach(function (val) {
		sum = sum + val;
	})
	var mean = Math.floor(parseInt(sum / arr.length));
	return mean;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 4
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7





// LOGIC PERKALIAN UNIK
function perkalianUnik(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var sum = 1;
		for (var u = 0; u < arr.length; u++) {
			if (i == u) {
				continue;
			}
			sum = sum * arr[u];
		}
		newArr.push(sum);
	}
	return newArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]





// LOGIC TENTUKAN DERET ARITMATIKA
function tentukanDeretAritmatika(arr) {
	var kelipatannya = arr[0];
	var berderet;
	for (var i = 0; i < arr.length; i++) {
		if (i != 0) {
			if (arr[i] - kelipatannya != arr[i - 1]) {
				berderet = false;
				break;
			} else {
				berderet = true;
			}
		}
	}
	return berderet;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false





// LOGIC TENTUKAN DERET GEOMETRI
function tentukanDeretGeometri(arr) {
	var berderet;
	var kelipatannya = arr[1] / arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i + 1] != undefined) {
			if (arr[i] * kelipatannya != arr[i + 1]) {
				berderet = false;
			} else {
				berderet = true;
			}
		}
	}
	return berderet;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false