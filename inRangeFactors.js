var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A, B, K) {

    // write your code in JavaScript (Node.js 0.12)

    console.log('A : ', A);
    console.log('B : ', B);
    console.log('K : ', K);

    if (A===B) return B % K === 0 ? 1 : 0;

    //shift A...B interval
    var shift = A-1;

    var newA = A-shift;
    var newB = B-shift;
    console.log('newA : ', newA);
    console.log('newB : ', newB);
    console.log('newB/K', newB/K);
    var nFactors =  Math.round(newB/K);
    console.log('Number of factors : ', nFactors);
    return nFactors;

}



var test1 = solution(6, 11, 2);

console.log('Pass : ', 3 === test1);

var test2 = solution(10,10,5);

console.log('test2 pass : ', 1 === test2);
console.log('test2 pass : ', 0 === solution(10,10,7));
console.log('test2 pass : ', 0 === solution(10,10,20));

console.log('1, 10, 10 -> 1 : ', solution(1,10,10));


var test3 = solution(11,345,17);

console.log('11, 345, 17 -> 20; got : ', test3);

console.log('101, 123M, 10K -> 12345 : ', solution(101, 123450000, 10000));
console.log('MAX_SAFE_INTEGER', Number.MAX_VALUE);
console.log('1, maxint, maxint :', solution(1, Number.MAX_VALUE, Number.MAX_VALUE))

var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')

/*
Write a function:
function solution(A, B, K);
that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:
{ i : A ≤ i ≤ B, i mod K = 0 }
For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.
Assume that:
A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:
expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).

*/
