function missing(array) {
  array.sort(function(a, b) { return a - b; });
  var int, i = 0, j = i + 1;
  for (i; i < array.length; i++, j++) {
    if (array[j] - array[i] > 1) int = array[i] + 1;
  }
  return int;
}

// functional programming alternative
var funcMissing = array.filter(function(num, i) {
  return array[i + 1] - num > 1; }).map(function(num) { return num + 1; });
