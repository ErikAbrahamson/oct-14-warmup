/* One Missing: Write a function that takes an array of integers between 1 and 10, with one missing integer, as an argument and returns the missing integer. Test this with Mocha and Chai. */

function missing(array) {
  array.sort(function(a, b) { return a - b; });
  var int, i = 0, j = i + 1;
  for (i; i < array.length; i++, j++) {
    if (array[j] - array[i] > 1) int = array[i] + 1;
  }
  return int;
}
