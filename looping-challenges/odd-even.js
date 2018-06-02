// Angka ganjil dan genap
for (var i = 1; i < 101; i++) {
	if (i % 2 == 0) {
		console.log('GENAP');
	} else {
		console.log('GANJIL');
	}
}

for (var i = 1; i < 101; i = i + 2) {
	if (i % 3 == 0) {
		console.log(i + ' kelipatan 3');
	} else {
		console.log('');
	}
}

for (var i = 1; i < 101; i = i + 5) {
	if (i % 6 == 0) {
		console.log(i + ' kelipatan 6');
	} else {
		console.log('');
	}
}

for (var i = 1; i < 101; i = i + 9) {
	if (i % 10 == 0) {
		console.log(i + ' kelipatan 10');
	} else {
		console.log('');
	}
}