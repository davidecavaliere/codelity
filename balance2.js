var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 0.12)
    /* this solution is slow
      var leftCount = 0;
      var rightCount = 0;
      var retVal = -1;
      for (var i=1; i<A.length-1; i++) {
        leftCount = rightCount = 0;
        // i is splitting index
        var Al = [];
        var Ar = [];
        Al = A.slice(0,i);
        Ar = A.slice(i);



        console.log(Al);
        console.log(Ar);
        console.log('-----------');

        Al.forEach(function(al) {
          if (al===X) leftCount++;
        });

        Ar.forEach(function(ar) {
          if (ar!==X) rightCount++;
        });

        if (rightCount===leftCount) {
          retVal = i;
          break;
        }
      }

      return retVal;
    */

    var isEven = A.length % 2 === 0;
    var ARev = [],
        leftIndex = [],
        rightIndex = [],
        leftCount = 0,
        rightCount = 0
        centerIndex = [];

    for (var i in A) {
      ARev[A.length - 1 - i] = A[i];
    }

    for (var i in A) {
      if (A[i] === X)
        leftCount++;

      leftIndex[i] = leftCount;

      if (ARev[i] !== X)
        rightCount--;

      rightIndex[A.length - 1 - i] = rightCount;




    }

    for (var i in leftIndex) {
      centerIndex[i] = leftIndex[i] + rightIndex[i];
    }


    console.log(A);
    console.log(X);
    // console.log(ARev);
    console.log(leftIndex);
    console.log(rightIndex);
    console.log(centerIndex);

    if (A.length<=1) return -1;

    for (var i=0; i<centerIndex.length; i++) {
      console.log('c[', i, ']=', centerIndex[i]);
      // console.log('c[', i+1, ']=', centerIndex[i+1]);

      if (centerIndex[i] === -1 && centerIndex[i+1] !== 'undefined' && centerIndex[i+1] > 0  ) {
        return i;
      } else if (centerIndex[i] === 0) {
        var previous = centerIndex[i-1];
        var next = centerIndex[i+1];
        if (next === 'undefined') return i;
        if (Math.abs(previous)>=Math.abs(next)) return i;
        else return i-1;
      }

      // if (centerIndex[i] === -1 || centerIndex[i] === 0) {
      //   console.log(centerIndex[i] , 'is zero or one' );
      //
      //
      //   if (centerIndex[i-1] === 'undefined') return 0;
      //
      //
      //   if (centerIndex[i+1] === 0) {
      //     console.log('next element is 0');
      //     return i;
      //   }
      //   if (centerIndex[i-1] === 0) {
      //     return i-1;
      //   }
      //   if (centerIndex[i+1] === 1) {
      //     return i;
      //   }
      //
      //   if (centerIndex[i-1] === 1) {
      //     return i-1;
      //   }
      //   console.log('current index', i, 'is not pivotal');
      // } else {
      //   console.log(centerIndex[i], 'is not -1');
      // }
      // && centerIndex[i-1] === -1) {
      //   return i-1;
      // } else if (centerIndex[i] === -1 && centerIndex[i+1] === 1) {
      //   // console.log('c[', i, ']=', -1);
      //   // console.log('c[', i+1, ']=', centerIndex[i+1]);
      //   return i;
      // }
    }

    return -1;

    // var steps = 0;
    // var getElementFromLeft = function() {
    //   var elm = A[currentLeftIndex];
    //   if (elm === X) leftBranch++;
    //   else leftBranch--;
    //   currentLeftIndex++;
    //   steps++;
    // }
    //
    // var getElementFromRight = function() {
    //   var elm = A[currentRightIndex];
    //   if (elm !== X) rightBranch++;
    //   else rightBranch--;
    //   currentRightIndex--;
    //   steps++;
    // }
    //
    // var leftBranch = 0;
    // var rightBranch = 0;
    // var aCount = 0;
    // var n = A.length;
    // var middle = Math.floor(n/2);
    // var i = 0;
    // var j = n;
    //
    // A.forEach(function(a) {
    //   if (a===X) aCount++;
    //
    // });
    // console.log('A contains ', aCount, 'elements = to ', X);
    // console.log(n-aCount, ' are different');
    //
    // var currentLeftIndex = 0;
    //
    // var currentRightIndex = n-1;
    // var isBalanced = false;
    //
    // console.log('taking first element from left');
    // getElementFromLeft();
    //
    // while (!isBalanced) {
    //   console.log('left :', currentLeftIndex, 'right:', currentRightIndex);
    //
    //
    //   if (leftBranch>0 && leftBranch>rightBranch) {
    //     console.log('taking element from right');
    //     getElementFromRight();
    //   }
    //   //
    //   if (rightBranch>0 && rightBranch>=leftBranch) {
    //     console.log('taking element from left');
    //     getElementFromLeft();
    //   }
    //
    //   // if (rightBranch>0 && leftBranch>0 && rightBranch==leftBranch && steps===n) {
    //   //   isBalanced = true;
    //   // }
    //   //
    //   // if (steps === n) {
    //   //   break;
    //   // }
    // }
    //
    // while(j>middle && i<middle) {
    //   console.log(i,j);
    //   if (A[i] === X) leftBranch++;
    //   else leftBranch--;
    //
    //   if (A[j]!==X) rightBranch++;
    //   else rightBranch --;
    //
    //
    //   i++; j--;
    // }
    //
    // return 4;
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
console.log('expected 4 got ', test1);
console.log('extreme empty : expected -1 got', solution(5, []));
console.log('one element expected -1', solution(5,[1]));
console.log('simple even case expected 1', solution(1,[1,0,1,0]));
console.log('simple case 1,0,0,0,1 with 1 expected 2', solution(1, [1,0,0,0,1]));
console.log('simple case 1,0,0,0,1,1 with 1 expected 2', solution(1, [1,0,0,0,1,1]));

console.log('simple case 1,0,0,0,1 with 0 expected 1', solution(0, [1,0,0,0,1]));
console.log('simple case 1,0,0,0,1,1 with 0 expected 2', solution(0, [1,0,0,0,1,1]));
var B = [5,1,0,5,3,1,7,5];

console.log('5,1,0,5,3,1,7,5 exptected 4 got', solution(5, B));
console.log('more complex expected ', solution(5, A.concat(B)));



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
