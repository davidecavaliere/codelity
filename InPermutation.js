var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');
Array.prototype.sum = function(bias) {
  return this.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;

  }, bias);
}

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    console.log('running solution');
    var n = A.length;
    var max = 0;
    var total = 0;
    var counter = [];

    A.forEach(function(a, i) {
      // search for rank
      if (a>max) max=a;
      total += a;
      counter[a] = 1;
    });

    var expectedTotal = n*(n+1)/2;

    console.log('counter ', counter);

    if (n!=max) return 0; //is not a permutation
    if (total!=expectedTotal) return 0;

    var missingElement = false;

    for (var i=0; i<counter.length; i++) {
      if (counter[i]!=1) {
        missingElement = true;
        continue;
      }
    }

    return missingElement ? 1 : 0;

}

var a = [];

a[0] = 4;
a[1] = 1;
a[2] = 3;
a[3] = 2;


var test1 = solution(a);

console.log('Pass : ', 1 === test1);
var end = process.hrtime(start);

var B = [4, 1, 3];

console.log('Pass : ', 0 === solution(B));

var C = [1,3,3,3];

console.log('Pass : ', 0 === solution(C));

console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
/*
A non-empty zero-indexed array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
