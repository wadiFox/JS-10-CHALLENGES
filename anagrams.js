// Check if two provided strings are anagrams

function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    // str1 = str1.replace(/\s/g, "").toLowerCase();
    // str2 = str2.replace(/\s/g, "").toLowerCase();

    // We use \W is better to remove all non alphanumeric characters
    str1 = str1.replace(/\W/g, "").toLowerCase();
    str2 = str2.replace(/\W/g, "").toLowerCase();
    
      // If lengths are not equal, they can't be anagrams
    if (str1.length !== str2.length) return false;
    
    // Sort the characters and compare
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("ahol?? tUtti3332?", "?ttiut? 33OLha?23"));
console.log(areAnagrams("hol??? tUtti", "ttiut OLh!!"));