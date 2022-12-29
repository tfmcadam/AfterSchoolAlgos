/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

Input: nums = [2, 7, 11, 15], target = 9

var twoSum2 = function (nums, target){
    let map = new Map();
    for (let i = 0; nums.length; i++){
        if(map.has(target-nums[i])){
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i)
    }
}

var twoSum3 = function (nums, target){
    complements = {};
    for (let ii = 0; ii < nums.length; ii++){
        if(complements.hasOwnProperty(target - nums[ii])){
            return [complements[target - nums[i]], ii];
        }
        complements[nums[ii]] = ii;
    }
}

