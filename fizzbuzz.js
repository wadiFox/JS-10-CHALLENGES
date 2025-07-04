// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(num) {
  for(let i=1; i<=num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    }else if( i % 3 === 0 ){
      console.log('fizz');
    }else if( i % 5 === 0){
      console.log('buzz');
    }else{
      console.log(i);
    }
  }
  console.log('#################################')
};

fizzBuzz(20);
fizzBuzz(10);
fizzBuzz(28);
fizzBuzz(5);