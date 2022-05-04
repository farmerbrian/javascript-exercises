const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    let a = 0;
    let b = 1;
    for (let i = 1; i < number; i++) {
        let sum = b;
        b = a + b;
        a = sum;
    }
    return b;
};


// Do not edit below this line
module.exports = fibonacci;
