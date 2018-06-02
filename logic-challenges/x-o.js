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
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
