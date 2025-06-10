// Given a string, return the character that is most commonly used in the string

function maxChar(str){
    let charCount = {};
    for (let char of str) {
        if (char in charCount) {
            charCount[char]++;
            } else {
                charCount[char] = 1;
            }
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
return maxChar;
}

console.log(maxChar("hellloooohh"));