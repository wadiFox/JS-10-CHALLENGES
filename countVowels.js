// write a function that accepts a string, and count the vowels in this string

// first method 

function countVowel1(str){
    const vowels = ['a','e','u','i','o'];
    let count = 0;
    for (char of str.toLowerCase()){
        for(i=0;i<vowels.length;i++){
            if(char === vowels[i]) count++;
        }
    }
    return count;
}

// second method using inbuild function icludes()
function countVowel2(str){ 
  const vowels = ['a','e','u','i','o'];
    let count = 0;
    for (char of str.toLowerCase()){
       if(vowels.includes(char)) count++;
    }
    return count;
}
// third method using regex
function countVowel3(str){
    return str.toLowerCase().match(/[aeiou]/g).length;
    }
// fourth method using filter()
function countVowel4(str){
    return str.toLowerCase().split('').filter(char =>
       ['a','e','u','i','o'].includes(char)).length;
    }
// fifth method using reduce()
function countVowel5(str){
    return str.toLowerCase().split('').reduce((count, char) => ['a','e','u','i','o'].includes(char) ? count + 1 : count, 0);
    }


console.log(countVowel1("holaatuttiaeeeiiuuo"));
console.log(countVowel2("holaatuttiaeeeiiuuo"));
console.log(countVowel3("holaatuttiaeeeiiuuo"));
console.log(countVowel4("holaatuttiaeeeiiuuo"));
console.log(countVowel5("holaatuttiaeeeiiuuo"));
