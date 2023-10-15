const palindromes = function (string) {

    const pdArray = string.toLowerCase().replace(/\W/g, '' ).split('');
    const pdReversed = pdArray.map(index => index).reverse();

    const string1 = pdArray.toString();
    const string2 = pdReversed.toString();

    return (string1 === string2);


};

// Do not edit below this line
module.exports = palindromes;
