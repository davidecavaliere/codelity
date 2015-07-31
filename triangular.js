/*
A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
MAX_N = 100000;
MIN_N = 0;

MAX_VALUE = 2147483647;
MIN_VALUE = -2147483647;

var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');
function isTriangular(A,P,Q,R) {
  return (A[P]+A[Q]>A[R] && A[Q]+A[R]>A[P] && A[R]+A[P]>A[Q]);
}

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)
    /* this works but is not fast enough
      var n = A.length;

      for (var p=0; p<n; p++) {
        for (var q=p+1; q<n; q++) {
          for (var r=q+1; r<n; r++) {
            console.log('testing triplet ', p, q, r);
            if(isTriangular(A,p,q,r)) {
              console.log('triplet ', p, q, r, ' is trinagular ');
              return 1;
            }
          }
        }
      }

      return 0;
    */
    for (var i in A) {
      var pivot = A[i];
      for (var j=i+1; j<n; j++) {

        A.sort(function(previousElm,currentElm) {
          console.log('previousElm ', previousElm);
          console.log('currentElm', currentElm);
        });
      }
    }

}



var test1 = solution([10, 2, 5, 1, 8, 20]);

console.log('expected 1 , got ', test1);
console.log('extrem empty, expected 0 got', solution([]));
console.log('one triplet', solution([2,3,5]));


var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
