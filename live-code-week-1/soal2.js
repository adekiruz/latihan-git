/*
	BUAT FUNCTION numberCruncher() dengan satu PARAMETER berupa ARRAY
	BUAT 2 VARIABLE ARRAY kosong dan satu VARIABLE INTEGER dengan VALUE 0
	
	BUAT perulangan FOR untuk LOOPING PARAMETER dan mengulang sebanyak panjang VALUE PARAMETER
	BUAT VARIABLE INTEGER dengan VALUE hasil SUM dari INDEX ARRAY saat ini, sebelumnya dari saat ini, dan selanjutnya dari saat ini
		PUSH VARIABLE INTEGER ke salah satu VARIABLE ARRAY
		IF VARIABLE INTEGER ganjil
			PUSH VARIABLE ke salah satu VARIABLE ARRAY
			tambahkan VALUE dari VARIABLE INTEGER ke VARIABLE INTEGER di luar perulangan

	OUTPUT hasil SUM ARRAY
	OUTPUT hasil nilai ganjil
	OUTPUT SUM nilai ganjil
*/

function numberCruncher(arrayNum) {
	var newArrayNum = [];
	var nilaiGanjil = [];
	var sumNilaiGanjil = 0;
	
	for (var i = 0; i < arrayNum.length; i++) {
		var temp = arrayNum[i] + (arrayNum[i - 1] == undefined ? 0 : arrayNum[i - 1]) + (arrayNum[i + 1] == undefined ? 0 : arrayNum[i + 1]);
		newArrayNum.push(temp);
		if (temp % 2 != 0) {
			nilaiGanjil.push(temp);
			sumNilaiGanjil += temp;
		}
	}

	console.log(newArrayNum);
	console.log('nilai ganjil:', nilaiGanjil.join(', '));
	console.log('output:', sumNilaiGanjil);
}

numberCruncher([2 ,5 ,1 , 3]);
numberCruncher([2, 3, 1, 4, 1, 5, 0, 3]);
numberCruncher([3, 6, 8, 9, 1, 2, 3]);