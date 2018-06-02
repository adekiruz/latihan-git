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