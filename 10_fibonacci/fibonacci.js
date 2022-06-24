const fibonacci = function(n) {
    if (n > 0) {
        let a = 0;
        let b  = 1;
        let sum = a + b;
        for (let i = 1; i < n; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }
    else {
        return "OOPS";
    }
};

/*
    sum = 0, 1, 2, 3, 5, 8
    a = 0, 1, 1, 2, 3, 5
    b = 1, 1, 2, 3, 5, 8

    0 + 1 = 1
        1 + 1 = 2
            1 + 2 = 3
                2 + 3 = 5
                    3 + 5 = 8
*/

// Do not edit below this line
module.exports = fibonacci;
