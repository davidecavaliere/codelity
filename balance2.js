var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 0.12)
    var leftCount = 0;
    var rightCount = 0;
    var retVal = -1;
    for (var i=0; i<A.length; i++) {
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

      // if (A[i] === X) leftCount++;
      // console.log('i', i);
      // for (var j=i+1; j<A.length; j++) {
      //   console.log('j', j);
      //   if (A[j]!==X) rightCount++;
      // }
      // console.log('left ', leftCount, 'right', rightCount);
      if (rightCount===leftCount) {
        retVal = i;
        break;
      }
    }

    return retVal;


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



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
