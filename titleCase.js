// write a function that accepts a string, and should capitalize the fisrt letter  
// of each word in the string the return the capitalized string

// First Method

function capital(str){
const result = [];
const words = str.split(' ');
for(let word of words){
result.push(word[0].toUpperCase()+ word.slice(1));
};
return result.join(' ');;
}

console.log(capital("This is ouadie trying some coding challenges"));


// Second Method : Using Inbuild Method Map

function capitalize(phrase){
const splitedPhrase = phrase.split(' ');
return splitedPhrase.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// we can also write word[0] instead of word.charAt(0)
// return splitedPhrase.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize("This is ouadie trying some coding challenges"));
