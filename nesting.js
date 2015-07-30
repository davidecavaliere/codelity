var start = process.hrtime();



// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 0.12)

    var queue = [];

    if (S.length==0) return 1;
    // one elemente cannot be nested
    if (S.length==1) return 0;
    // starting with ) can never be nested
    if (S[0] === ')') return 0;

    for (var i in S) {
      var elm = S[i];
      if (elm === '(') queue.push({});
      else if (queue.length>0) queue.pop();
      else return 0; // nothing to pop... unbalanced
console.log(queue);
      // bad nesting
      if (queue.length < 0) return 0;
    }

    return queue.length === 0 ? 1 : 0;
}



var test1 = solution('())');

console.log('())', test1);
console.log(')()', solution(')()'));
console.log('()()', solution('()()'));
console.log('()', solution('()'));

var end = process.hrtime(start);
console.log();
console.log('----------------------------------------');
console.log('Execution time : ', end[1]/1000000, 'm/s');
console.log('----------------------------------------')
