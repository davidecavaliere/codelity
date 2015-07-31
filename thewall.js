var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 0.12)

    var area = 0;
    var maxHeight = 0;
    var matrix = [];
    A.forEach(function(elm) {
      if(elm>maxHeight) maxHeight = elm;
      area += elm;
    });

    console.log('maxHeight ', maxHeight);
    console.log('area ', area);

    for (var i in A) {

    }

    // for (var i in A) {
    //   var elm = A[i];
    //   var column = [];
    //   for (var j=0; j<=elm; j++) {
    //     column[j] = 1;
    //   }
    //
    //   for (var j=elm+1; j<=maxHeight; j++) {
    //     column[j] = 0;
    //   }
    //
    //   matrix[i] = column;
    //
    // }
    //
    // var cornerStone = matrix[1,1];
    //
    //
    //
    // console.log(matrix);

    return 7;
}


var H = [];
/*
    *
**  **  *
** **** *
******* *
******* *
*********
*********
*********
*********
---------
*/
H[0] = 8;    H[1] = 8;    H[2] = 5;
H[3] = 7;    H[4] = 9;    H[5] = 8;
H[6] = 7;    H[7] = 4;    H[8] = 8;

var test1 = solution(H);

console.log('expected 7 got ', test1);



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
