// LOGIC PALINDROME WORD
function palindrome(kata) {
	var index = kata.length - 1;
	var newKata = '';
	while (kata[index] != undefined) {
		newKata += kata[index];
		index--;
	}
	if (kata == newKata) {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false