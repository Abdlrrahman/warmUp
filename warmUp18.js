// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function occurence(string) {
	var count = 0;
	var result = '';
	for(var i = 0; i <= string.length; i++) {
			if(string[(string.length - 1) - i] === string[i]) {
				count ++;
				result += count;
			}
			else {
				result += 1;
			}
		}
	return result;
}