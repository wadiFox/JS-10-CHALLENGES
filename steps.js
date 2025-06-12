// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// first method 
function step(n) {
    
    for (let i = 1; i <= n; i++){
        let line ='';
        for(let j = 1; j <= n; j++){
           if(j <= i) line += '#';
           else line += ' ';
        }
        console.log(line);
     }
    }

// second method using repeat

        function steps(n) {
    for (let i = 1; i <= n; i++){
        console.log('#'.repeat(i) + ' '.repeat(n - i));
        }    
    }

    step(9);
    steps(9);