/*
 * The problem:
 * Determine if a substring of length m is in a text of length n.
 *
 * Run it at https://repl.it/Brnf
 */
 
var match = function(text, pattern) {
  var endCondition = text.length - pattern.length;
  for (var i = 0; i < endCondition; ++i) {
    var isAllSame = true;
    for(var j = 0; j < pattern.length; ++j) {
      if (pattern.charAt(j) !== text.charAt(i + j)) {
        isAllSame = false;
        break;
      }
    }
    if (isAllSame) {
      return true;
    }
  }
  return false;
}
