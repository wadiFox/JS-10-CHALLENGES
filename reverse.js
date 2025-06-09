// Given a string, return a new string with the reversed order of characters

// First Method

function reverse_1(str){
    let reversed = "";
    
    /* The old for loop syntax
    for (let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
     */

    // The new for loop syntax
    for(let char of str){
        reversed = char + reversed;
    }

    return reversed;
};

console.log(reverse_1('valahala'));

// Second Method

function reverse_2(str){
    let reversed = "";
    for( let i = str.length - 1; i >= 0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverse_2('Hello How Are You Today'));

// Third Method : using inbuild JS methods

function reverse_3(str){
    /*
    let reversed = str.split('').reverse().join('');
    return reversed;
    */
   // We Can Simply Use This 
   return str.split('').reverse().join('');
}

console.log(reverse_3('Using Inbuild Methods'));

// Fourth Test : Reverse A Number

function reverseNum(num){
    /*
    let reversed = str.split('').reverse().join('');
    return reversed;
    */
   // We Can Simply Use This 
   const reversedNum = num.toString().split('').reverse().join('');
   
   // by using split and join we return a string
   // we use parseInt to return an integer instead of string
   // Math.sign avoid reversing the math sign
   return parseInt(reversedNum) * Math.sign(num); 
}
console.log(reverseNum(-678));
console.log(reverseNum(-81));
console.log(reverseNum(781));

