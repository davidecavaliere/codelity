var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)

    var stack = [];
    var previous = null;
    A.sort();
    console.log('sorted A ', A);

    // length 2 or less has
    if (A.length==0) return null;
    if (A.length==1) return A[0];
    if (A.length==2) return null;

    while (A.length>2) {
      var firstElement = A.shift();
      stack.unshift(firstElement);
      var secondElement = A.shift();
      stack.unshift(secondElement);
      if (stack[0] !== stack[1]) {
        stack.shift();
        stack.shift();
      }
    }

    console.log('final stack : ', stack);

    return stack[0];
}



var test1 = solution([6, 8, 4, 6, 8, 6, 6]);

console.log('expected 6 got ',  test1);
console.log('expected 1 got ', solution([1, 2, 1, 3, 1, 4, 1, 6, 9, 1]));


var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
