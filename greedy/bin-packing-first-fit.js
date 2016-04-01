/*
 * The problem:
 * Given bins has capacity of 1 and n items of weight 0 to 1, find the minimum number of bins needed
 * to store all items.
 *
 * Run it at https://repl.it/CBUN/1
 */
 
 var binpack = function(items) {
	var bins = [];
	var k = 0;
	for(var i in items) {
		var o = items[i];
		var binFound = false;
		for (var j = 0; j < k; ++j) {
			if (bins[j] + o <= 1) {
				bins[j] = bins[j] + o;
				binFound = true;
				break;
			}
		}
		if (!binFound) {
			bins.push(o);
			++k;
		}
	}
	return k;
}
