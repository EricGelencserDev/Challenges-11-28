function highestNumber (arr){
   var max = -Infinity
   arr.forEach(
     function(e) {
        if (e > max) {
          max = e;
        }
     }
 )

   return max
}

var a = [1, 5, 8 ,-5, .090, 89.0343232, -.000000000001, 90212101212111119]
var maxNumber = highestNumber(a);
console.log(maxNumber);
