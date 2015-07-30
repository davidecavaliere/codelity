var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)


    return 4;
}



var test1 = solution([2, 3, 1, 5]);

console.log('Pass : ', 4 === test1);



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
