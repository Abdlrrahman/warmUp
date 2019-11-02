/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
day = index of the array
price = element of the index (which is the day)
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  var price = {};
  var day;
  var cost;
  var value;
  price.cost = prices[0];
  price.value = price.cost;
  price.day = day;
  price.prices = prices;
  price.buy = buy;
  price.sell = sell;
  return price
}

var buy = function() {
	for (var i = 0; i < this.prices.length; i++) {
		if(this.cost > this.prices[i]) {
			this.cost = this.prices[i];
			this.day = i+1;
		}
	}
	return 'the price of buying '+this.cost +' on day number '+this.day;
}

var sell = function() {
	for (var i = this.day--; i < this.prices.length; i++) {
		if(this.value < this.prices[i]) {
			this.value = this.prices[i];
		}
	}
	return this.value;
}