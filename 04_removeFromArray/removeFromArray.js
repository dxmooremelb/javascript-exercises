const removeFromArray = function(array, ...remove) {

    let newArray = [];

    for (i = 0; i < array.length; i++) {

        if (remove.includes(array[i])) {
            continue;
        } else {
            newArray.push(array[i]);
        }

    };

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
