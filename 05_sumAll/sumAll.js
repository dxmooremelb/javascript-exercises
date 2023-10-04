const sumAll = function(...nums) {

    let sum = 0;

    if (nums[0] < 0 || nums[1] < 0) {
        return 'ERROR'
    };

    if (typeof(nums[0]) !== 'number' || typeof(nums[1]) !== 'number') {
        return 'ERROR'
    }

    if (nums[0] > nums[1]) {
        nums = nums.reverse();
    };

    for (i = nums[0] - 1; i < nums[nums.length -1]; i++) {
        sum += i + 1;
    };

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
