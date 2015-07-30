var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)

    var n = A.length+1;
    var total = n * (n+1) / 2;
    console.log('total : ', total);


    A.forEach(function(a) {
      total -= a;
      console.log('decresing by ', a, ' makes a total of ', total);
    });

    return total;
}




var test1 = solution([2, 3, 1, 5]);
console.log('test1', test1);
console.log('Pass : ', 4 === test1);



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
