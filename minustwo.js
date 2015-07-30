var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(A) {
  console.log('-------------=========----- ');

  var toNegaBinary= function( number ) {


      var digits = [];

      while (number != 0) {
        var mod = number % base;
        console.log('----');
        console.log('number is', number);
        console.log(number, '%', base, '=', mod);
        var res = number / base;
        number = res > 0 ? Math.floor(res) : Math.ceil(res);
        console.log('res ', res, 'number', number);
        // console.log('number is now ', number);
        if (mod<0 && number==0) {
          number++;
        }

        digits.push(Math.abs(mod));


      }

      return digits.reverse();
  }
    // write your code in JavaScript (Node.js 0.12)
    var sum = 0;
    var base = -2;
    var baseRap = [];
    A.forEach(function(a, i) {

      sum += a * Math.pow(base, i);

    });

    console.log('A ', A, ' = ', sum);
    sum = -sum;
    console.log('rebasing ', sum);

    return toNegaBinary(sum);
}



var test1 = solution([1, 0, 0, 1, 1]);

console.log('expected 1,0,0,1', test1);
console.log('expected 1,1,0,0', solution([0,0,1]));



var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
