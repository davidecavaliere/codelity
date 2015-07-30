function merge(left, right){
    var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
         if (left[il] < right[ir]){
             result.push(left[il++]);
         } else {
             result.push(right[ir++]);
         }
     }

     return result.concat(left.slice(il)).concat(right.slice(ir));
 }

 function mergeSort(items){

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
         return items;
     }

     var middle = Math.floor(items.length / 2),
         left    = items.slice(0, middle),
         right   = items.slice(middle);

     return merge(mergeSort(left), mergeSort(right));
 }

 function testCase() {
   var A = [3, 6, 1, 5, 2, 4, 7];
   console.log('A is ', A);
   console.log('sorted A is ', mergeSort(A));

 }

 testCase();
