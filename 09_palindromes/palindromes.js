const palindromes = function (txt) {
    let clnTxt = txt.replace(/[^\w]/g, '');
    clnTxt = clnTxt.toLowerCase();
    let newTxt = "";
    for (let i = clnTxt.length-1; i >= 0; i--) {
        newTxt += clnTxt[i];
    }
    return newTxt === clnTxt;
};

// Do not edit below this line
module.exports = palindromes;
