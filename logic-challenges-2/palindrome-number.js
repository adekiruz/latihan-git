// LOGIC PALINDROME NUMBER
function angkaPalindrome(num) {
	function cekPalindrome(number) {
		var a = 0;
		var num2 = 0;
		var fromArg = number;
		while (number > 0) {
			a = number % 10;
			number = parseInt(number / 10);
			num2 = num2 * 10 + a;
		}
		if (num2 == fromArg) {
			return true;
		} else {
			return false;
		}
	}
	var palin = false;
	var palinNum = 0;
	while (palin != true) {
		if (cekPalindrome(++num)) {
			palin = true;
			palinNum = num;
		}
	}
	return palinNum;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001