const reverseString = function(string) {

    length = string.length;
    let reversedString = '';

    for (i = length; i >= 0; i--) {

    reversedString += string.charAt(i);

};

return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
