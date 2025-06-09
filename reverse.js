// Given a string, return a new string with the reversed order of characters

// First method

function reverse(str){
    let reversed = "";
    for (let i = 0; i < str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
};

console.log(reverse('valahala'));

// Second method

function reverse_2(str){
    let reversed = "";
    for( let i = str.length - 1; i <= 0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverse('Hello How Are You Today'));