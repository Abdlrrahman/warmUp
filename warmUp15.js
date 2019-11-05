// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

// I attempted to reverse the string without using any built in functions by taking the last element of the string and putting it into a string and so on I managed to do so but the every letter was reversed as well
function reverseStr(string) {
	var str = '';
	for(var i = 0; i <= string.length - 1; i++) {
		str += string[string.length - 1 - i];
	}

	return str;
}

reverseStr("hi there how is the weather today")

