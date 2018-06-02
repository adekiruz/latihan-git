// Menyusun tangga bintang dengan nested looping
var row3 = 5;
for (var i = 0; i < row3; i++) {
	var asterisk = '';
	for (var u = 0; u <= i; u++) {
		asterisk += '*';
	}
	console.log(asterisk);
}