nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// Output: 4

nums2 = [4, 5, 6, 7, 0, 1, 2], target = 3
// Output: -1

nums3 = [1], target = 0
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    for (let i = 0; i < nums.length; i++){
        if(target == nums[i])
        return i
    }
    return -1;
};


console.log(search(nums,0))
console.log(search(nums2, 3))
console.log(search(nums3, 0))