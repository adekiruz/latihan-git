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