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
