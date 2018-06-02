// LOGIC KONVERSI MENIT
function konversiMenit(menit) {
	var jam = menit / 60;
	var menit = menit % 60;
	return Math.floor(jam) + ':' + menit;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:3
console.log(konversiMenit(124)); // 2:4
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:0