/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [3, 4, 5, 1, 2]
// Output: 1
nums2 = [4, 5, 6, 7, 0, 1, 2]
// Output: 0
nums3 = [11, 13, 15, 17]
// Output: 11

var findMin = function (nums) {
    temp = nums[0]
    for ( i = 1; i<nums.length; i++){
        if (nums[i] < temp){
            temp = nums[i];
        }
    }
    return temp
};

console.log(findMin(nums))
console.log(findMin(nums2))
console.log(findMin(nums3))