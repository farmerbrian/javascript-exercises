const palindromes = function (word) {
    
    let lowerCase = word.toLowerCase();
    let cleanWord = lowerCase.replace(/[^a-z]/g, "");
    let splitWord = cleanWord.split("");
    let reverseWord = splitWord.reverse();
    let joinWord = reverseWord.join("");
    if (cleanWord == joinWord) {
        return true;
    } else {
        return false;
    };
    
};

// Solution from Github that is slightly above my head.

// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };


// Do not edit below this line
module.exports = palindromes;
