// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function maximum(string) {
	str = 'balloon';
	var count = 0;
	var regex = /[A-Z]/g;
	if(regex.test(string) === false) {
	for (var i = 0; i < string.length - 1; i++) {
		for (var j = 0; j < str.length - 1; j++) {
			if(str[j] === string[i]) {
				count++;
			}
		}
	}
	return Math.floor(count/str.length);
	}
	else {
		return 'Invalid input';
	}
}