// Given a string, return the character that is most commonly used in the string

function maxChar(str){
    let charCount = {};
    for (let char of str) {
         /* converting the if statement in one line code
        if (char in charCount) {
            charCount[char]++;
            } else {
                charCount[char] = 1;
            }
         */   
        
        // Replacing if statement with one line
             charCount[char] = charCount[char] + 1 || 1 ;
        }
console.log(charCount);                
let maxCount = 0;
let maxChar = '';
    for (let char in charCount) {
       
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
            }
        }

return `${maxChar} : is used => ${maxCount} times`;
}

console.log(maxChar("hellllllllkkkkkkkkkkoooohh"));
console.log(maxChar("TV 21388"));