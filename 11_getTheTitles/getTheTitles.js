const getTheTitles = function(myArray) {
    let titles = myArray.map(myArray => myArray.title)
    //let key;
    //console.log(myArray);
    // for (key in myArray) {
    //     console.log(myArray.title);
    //     titles.push(myArray.title);
    // }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
