// OBJECT CHANGE ME
function changeMe(arr) {
	arr.forEach(function (data) {
		var year = new Date();
		year = year.getFullYear();
		var age = (data[3] == undefined || data[3] > year ? 'Invalid Birth Year' : (year - data[3]));
		var obj = {
			firstName: data[0],
			lastName: data[1],
			gender: data[2],
			age: age
		}
		console.log('1. ' + data[0] + ' ' + data[1], obj)
	});
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""