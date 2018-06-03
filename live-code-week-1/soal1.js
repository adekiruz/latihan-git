function drawThreeColsBox(height) {
	var currentHeight = 1;
	for (var i = 0; i < height; i++) {
		var threeColsBox = '';
		var no = currentHeight;
		for (var u = 0; u < 3; u++) {
			threeColsBox += no + ' ';
			currentHeight = no;
			no++;

			if (u == 2) {
				currentHeight += 1;
			}
		}
		console.log(threeColsBox);
	}
}
drawThreeColsBox(5);