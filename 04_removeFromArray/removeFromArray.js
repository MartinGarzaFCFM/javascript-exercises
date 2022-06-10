const removeFromArray = function(arr, ...nums) {
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            arr.splice(arr.indexOf(nums[i]), 1);
        }        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//