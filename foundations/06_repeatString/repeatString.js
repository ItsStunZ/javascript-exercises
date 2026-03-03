const repeatString = function(str, repeat) {
    if (repeat < 0) return 'ERROR';

    let newString = '';
    for (i=0; i < repeat; i++) {
        newString += str;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
