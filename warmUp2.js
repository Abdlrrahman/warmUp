// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(x, y){
	if(y === 0){
		return x;
	}
	return gcd(y, x%y);
}




// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.

function sum(x, y){
	var c = 0;
	if(c < x && x < y){
		c++;
		return sum(x++,y);
	}
	else if(c < y && y < x){
		c++;
		return sum(x,y++);
	}
	return c;

}
	

=======
//you can only add one at each summetion, you'll need to use recursion in this.

