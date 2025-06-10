// Given a string, return true if the string is a palindrome

function isPalindrome(str){
    // Convert the string to lowercase to ignore case sensitivity
    str = str.toLowerCase();
    const reversed = str.split('').reverse().join('');
    // Compare the original string with the reversed string
    return str === reversed;
}

console.log(isPalindrome('kayak')); // True
console.log(isPalindrome('kAYak')); // True
console.log(isPalindrome('kayaki')); // False

