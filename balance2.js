var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 0.12)
    var isEven = A.length % 2 === 0;
    var ARev = [],
        leftIndex = [],
        rightIndex = [],
        leftCount = 0,
        rightCount = 0
        centerIndex = [];

    if (A.length<=1) return -1;

    for (var i in A) {
      ARev[A.length - 1 - i] = A[i];
    }

    for (var i in A) {
      if (A[i] === X) leftCount++;
      leftIndex[i] = leftCount;
      if (ARev[i] !== X) rightCount--;
      rightIndex[A.length - 1 - i] = rightCount;
    }

    for (var i in leftIndex) {
      centerIndex[i] = leftIndex[i] + rightIndex[i];
    }

    // console.log(A);
    // console.log(X);
    // console.log(ARev);
    // console.log(leftIndex);
    // console.log(rightIndex);
    // console.log(centerIndex);

    var middle = 0;

    for (var i=0; i<centerIndex.length; i++) {
      // console.log('c[', i, ']=', centerIndex[i]);
      if (centerIndex[i] === -1 && centerIndex[i+1] !== 'undefined' && centerIndex[i+1] === 1) {
        // console.log('// there is no zero return i');
        middle = i;
      } else if (centerIndex[i] === 0) {
        // console.log('// there is a zero return');
        middle = i;
      }
    }


    // console.log('pivotal point ', i);

    var balanced = false;

    // if (middle==0) return -1;


    while (!balanced) {
      // wrost case scenario is that this cicle is done
      // n/2 times
      var ls = 0;
      var rs = 0;
      var L = A.slice(0,middle);
      var R = A.slice(middle);

      L.forEach(function(l) {
          if (l===X) ls++;
      });

      R.forEach(function(r) {
        if(r!==X) rs++;
      });

      // console.log('L', L, 'ls', ls);
      // console.log('R', R, 'rs', rs);

      if (ls<rs) { middle ++ } else { middle--}
      balanced = ls === rs;
    }

          // the wrost case scenario is that n/2 times with need
          // to scan the n array once hence O((n^2)/2) even if it should be much
          // quicker under normal circumstances



    return middle;
}

var A = [];

A[0] = 5;
A[1] = 5;
A[2] = 1;
A[3] = 7;
A[4] = 2;
A[5] = 3;
A[6] = 5;

var test1 = solution(5, A);
console.log('expected 3 got ', test1);
console.log('extreme empty : expected -1 got', solution(5, []));
console.log('one element expected -1', solution(5,[1]));
console.log('simple even case expected 1', solution(1,[1,0,1,0]));
console.log('simple case 1,0,0,0,1 with 1 expected 2', solution(1, [1,0,0,0,1]));
console.log('simple case 1,0,0,0,1,1 with 1 expected 2', solution(1, [1,0,0,0,1,1]));
// //
console.log('simple case 1,0,0,0,1 with 0 expected 1', solution(0, [1,0,0,0,1]));
console.log('simple case 1,0,0,0,1,1 with 0 expected 2', solution(0, [1,0,0,0,1,1]));
var B = [5,1,0,5,3,1,7,5];
// //
console.log('5,1,0,5,3,1,7,5 exptected 4 got', solution(5, B));
console.log('more complex expected 8', solution(5, A.concat(B)));

console.log('very long test please wait');


var input = [];
var needle = Math.floor(Math.random() * (1000 - 0));
for (var i=0; i<=10000; i++) {
  input[i] = Math.floor(Math.random() * (1000 - 0)) + 0;
}
//
console.log('caotic big sequence with needle', needle, ' - ', solution(needle, input));

var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
