/*
Write a function

function solution(A);

that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
For example, given array A consisting of six elements such that:

A[0] = 2    A[1] = 1    A[2] = 1
A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

var MIN_N = 0;
var MAX_N = 100000;
var MIN_VALUE = -1000000;
var MAX_VALUE = 1000000;

var start = process.hrtime();

//
// function cleanArray(head,tail) {
//   if (tail.length>0) {
//
//     var newTail = []
//     for (var i in B) {
//       if (tail[i]!==head) newTail.push(B[i]);
//     }
//     return newTail;
//   } else {
//     return head;
//   }
//
// }
// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function cleanTail(tail) {

}

function solution(A) {
  /* this solution is pretty elegant but still to complex O(n^2);
    var elementsCount = 0;
    for (var i=0; i<A.length; i++) {
      var elm = A[i];
      if (elm!=null) {
        elementsCount++;
        for (var j=i+1; j<A.length; j++) {
          if (A[j] === elm) A[j] = null;
        }
      }
    }
    return elementsCount;
  */
  //
  // var elements = 0;
  //
  // while (A.length>0) {
  //   var head = A.shift();
  //   var indexes = [];
  //
  //   for (var i in A) {
  //     if (head === A[i]) {
  //
  //       indexes.push(i);
  //     }
  //   }
  //
  //   for (var j=A.length-1; j>0; j--) {
  //     A.splice(j, 1);
  //   }
  // }
  if (A.length<=1) return A.length;

  var elementsCount = 1;
  // console.log('A is ', A);
  A.sort();
  // console.log('Sorted A is ', A);

  A.reduce(function(previousV, currentV, i, a) {
    if (previousV !== currentV) elementsCount++;
    return currentV;
  });

  return elementsCount;
}



// console.log('sequence of one element', solution([2]));
console.log('empty array', solution([]));
var test1 = solution([2, 2, 1, 2, 1, 3, 2, 3, 1]);
console.log('simple test 3 elms: ', test1);
console.log(' one value ', solution([1,1,1,1,1,1,1,1,1,1]));
console.log(' two values ', solution([1,1,1,1,1,2,2,2,2,2,2]));
console.log('edge case be patient');
var input = [];
for (var i=0; i<=MAX_N; i++) {
  if (i%100 === 0 || i%230===0) input[i] = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE)) + MIN_VALUE;
}
//
console.log('solution', solution(input));

var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
