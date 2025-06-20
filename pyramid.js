// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Building the pyramid
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const mid = Math.floor((2*n-1)/2);
  for(let row=0; row<n; row++){
    let line = '';
    for(let col=0; col<2*n-1; col++){
      if( col >= mid - row && col<= mid + row ){
        line += '#';
      }else{
        line += ' ';
      }
    }
    console.log(line);
  }
}

// Pyramid reversed
//       '### ###'
//       '##   ##'
//       '#     #'
//       '       '
function pyramidReversed(n) {
    const mid = Math.floor((2*n-1)/2);
  for(let row=0; row<n; row++){
    let line = '';
    for(let col=0; col<2*n-1; col++){
      if( col >= mid - row && col<= mid + row ){
        line += ' ';
      }else{
        line += '#';
      }
    }
    console.log(line);
  }
}
 // Pyramid Up Down
 //     '#####'
 //     ' ### '
 //     '  #  '

function pyramidUpDown(n) {
    const mid = Math.floor((2*n-1)/2);
  for(let row=n-1; row>=0; row--){
    let line = '';
    for(let col=2*n-1; col>=0; col--){
      if( col >= mid - row && col<= mid + row ){
        line += '#';
      }else{
        line += ' ';
      }
    }
    console.log(line);
  }
}


pyramid(15);
pyramidReversed(15)
pyramidUpDown(15);
