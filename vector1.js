var start = process.hrtime();

// NEVER DO THIS! :-)
Array.prototype.sum = function(bias) {
  return this.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;

  }, bias);
}

Array.prototype.min = function() {
  return this.reduce(function(previousValue, currentValue) {
    return Math.min(previousValue, currentValue);
  });
}

var A = [3, 1, 2, 4, 3];

var distances = [];

var head = [];
var tail = [];
var p = A.length-2;

for (var i=1; i<=p; i++) {
  head = A.slice(0,i);
  tail = A.slice(i, p+2);

  var headSum = head.sum(0);
  console.log('headsum : ', headSum);
  var tailSum = tail.sum(0);
  console.log('tailsum : ', tailSum);

  var distance = Math.abs(tailSum - headSum);

  distances.push(distance);

  console.log('[', head, '] [', tail, '] -> distance : ', distance);

}

var min = distances.min();

console.log('Minimal distance : ', min);



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')


return min;
