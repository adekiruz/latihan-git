// LOOPING 1
console.log('LOOPING PERTAMA');
var n = 2;
while (n < 21) {
	console.log(n + ' - I love coding');
	n = n + 2;
}

console.log('LOOPING KEDUA');
n = 20;
while (n > 0) {
	console.log(n + ' - I will become developer');
	n = n - 2;
}





// LOOPING 2
console.log('LOOPING PERTAMA');
for (var i = 1; i < 21; i++) {
	console.log(i + ' - I love coding');
}

console.log('LOOPING PERTAMA');
for (var i = 20; i > 0; i--) {
	console.log(i + ' - I love coding');
}





// LOOPING 3
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





// LOOPING 1
var row1 = 5;
for (var i = 0; i < row1; i++) {
	console.log('*');
}





// LOOPING 2
var row2 = 5;
for (var i = 0; i < row2; i++) {
	var asterisk = '';
	for (var u = 0; u < row2; u++) {
		asterisk += '*';
	}
	console.log(asterisk);
}





// LOOPING 3
var row3 = 5;
for (var i = 0; i < row3; i++) {
	var asterisk = '';
	for (var u = 0; u <= i; u++) {
		asterisk += '*';
	}
	console.log(asterisk);
}