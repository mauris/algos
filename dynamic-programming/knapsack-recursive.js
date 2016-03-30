/*
 * The problem:
 * Given a sack of maximum capacity W, and a list of items, each item with a corresponding weight and value,
 * maximize the value of the items you can store in the sack. 
 *
 * Run it at https://repl.it/CAe1
 */

var items = [
	[4, 8],
	[10, 4],
	[8, 16],
	[3, 7],
	[4, 9],
	[5, 11],
	[8, 3],
	[3, 10]
];

var knapsack = function(W, items) {
	var result = 0;
	
	var recursion = function(W, i) {
		if (i >= items.length) {
			return 0;
		}
		var valueWithout = recursion(W, i + 1);
		if (items[i][0] > W) {
			return valueWithout;
		}
		return Math.max(recursion(W - items[i][0], i + 1) + items[i][1], valueWithout);
	}
	
	result = recursion(W, 0);
  
  return result;
}

console.log(knapsack(10, items));
