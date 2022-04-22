const sumAll = function(a, b) {
    if (a < b && a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        let sumUp = a;
        for (let i = a; i < b; i++) {
            sumUp = (sumUp + (i+1));
            }
        return sumUp;
    } else if (a > b && a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)){
        let sumUp = b;
        for (let i = b; i < a; i++) {
            sumUp = (sumUp + (i+1));
            }
        return sumUp;
    } else { sumUp = "ERROR"
        return sumUp;
    }

    
    

};

// Do not edit below this line
module.exports = sumAll;
