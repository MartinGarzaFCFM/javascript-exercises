const reverseString = function(input) {
    let string = "";

    for (let i = 0; i < input.length; i++) {
        string += input.charAt((input.length - 1) - i);
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
