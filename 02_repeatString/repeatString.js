let repeatedWord;

const repeatString = function(word, number) {
    let repeatedWord;
    if (number == 0) {
        repeatedWord = '';
    } else if (number < 0) {
        repeatedWord = 'ERROR';
    } else {
        repeatedWord = word;
    for (let i = 1; i < number; i++) {
        repeatedWord = `${repeatedWord}${word}`;   
    }
}
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
