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





// OBJECT SHOPPING TIME
function shoppingTime(memberId, money) {
	var arrayBarang = [
		['Sepatu brand Stacattu', 1500000],
		['Baju brand Zoro', 500000],
		['Baju brand H&N', 250000],
		['Sweater brand Uniklooh', 175000],
		['Casing Handphone', 50000]
	];

	if (memberId == '' || memberId == undefined) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja';
	} else if (money < 50000) {
		return 'Mohon maaf, uang tidak cukup';
	}

	var arrayBarangDibeli = [];
	var moneyChange = money;
	arrayBarang.forEach(function (data) {
		if (money > data[1]) {
			arrayBarangDibeli.push(data[0]);
			moneyChange = moneyChange - data[1];
		}
	});

	return {
		memberId: memberId,
		money: money,
		listPurchased: arrayBarangDibeli,
		changeMoney: moneyChange
	};
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja





// OBJECT TOKO X
function countProfit(shoppers) {
  	var listBarang = [
	  	['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1]
	];

	var detail = [];

	for (var i = 0; i < listBarang.length; i++) {
		var detailTemp = {
			product: listBarang[i][0],
			shoppers: [],
			leftOver: listBarang[i][2],
			totalProfit: 0
		};

		for (var u = 0; u < shoppers.length; u++) {
			if (detailTemp.product == shoppers[u].product) {
				if (detailTemp.leftOver >= shoppers[u].amount) {	
					detailTemp.shoppers.push(shoppers[u].name);
					detailTemp.leftOver -= shoppers[u].amount;
				}
			}
		}

		detailTemp.totalProfit = (listBarang[i][2] - detailTemp.leftOver) * listBarang[i][1];

		detail.push(detailTemp);
	}
	
	return detail;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
