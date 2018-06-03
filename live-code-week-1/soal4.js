function getReport(studentGrades) {
	var classCode = ['A', 'B', 'C'];
	var arr = [];

	for (var i = 0; i < classCode.length; i++) {
		var obj = {
			classCode: '',
			passed: [],
			failed: []
		};
	
		studentGrades.forEach(function (data) {
			if (classCode[i] == data.classCode) {
				obj.classCode = data.classCode;
				if (data.score >= 70) {
					obj.passed.push(data.name);
				} else {
					obj.failed.push(data.name);
				}
			}
		});

		arr.push(obj);
	}

	return arr;
}

var grades1 = [
	{ name: 'John', score: 80, classCode: 'A' },
	{ name: 'Mike', score: 60, classCode: 'B' },
	{ name: 'Budi', score: 70, classCode: 'C' },
	{ name: 'Siti', score: 50, classCode: 'A' },
	{ name: 'Aaron', score: 10, classCode: 'A' },
	{ name: 'Arthur', score: 10, classCode: 'C' },
	{ name: 'Osass', score: 10, classCode: 'B' },
	{ name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] },
  { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
  { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
]
*/
