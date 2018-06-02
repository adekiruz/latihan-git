// Menyusun barisan bintang dengan nested looping
var row2 = 5;
for (var i = 0; i < row2; i++) {
	var asterisk = '';
	for (var u = 0; u < row2; u++) {
		asterisk += '*';
	}
	console.log(asterisk);
}