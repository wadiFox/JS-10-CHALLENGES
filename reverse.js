// Given a string, return a new string with the reversed order of characters

// First Method

function reverse_1(str){
    let reversed = "";
    for (let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
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
    let reversed = str.split('').reverse().join('');
    
    return reversed;
}

console.log(reverse_3('Using Inbuild Methods'));


