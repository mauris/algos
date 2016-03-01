/*
 * The problem:
 * Count the number of substrings that begin with 'A' and end with 'Z' in a text of length n
 *
 * Run it at https://repl.it/Brl0
 */
 
var count = function(text) {
  var sum = 0;
  var startCount = 0;
  for(var i = 0; i < text.length; ++i) {
    var char = text.charAt(i);
    if (char === 'A') {
      startCount += 1;
    } else if (char === 'Z') {
      sum += startCount;
    }
  }
  return sum;
};
