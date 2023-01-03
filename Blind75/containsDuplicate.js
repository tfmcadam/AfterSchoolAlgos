Input: nums1 = [1, 2, 3, 1]
Input: nums2 = [1, 2, 3, 4]
Input: nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j<nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return true
};

// create a new Map
var containsDuplicate2 = function (nums) {
    const hashTable = new Map();
    // cycle through the loop 
    for (let i = 0; i < nums.length; i++) {

        // if the nums[i] is in the map return true
        if (hashTable.has(nums[i])) return true;

        // otherwise, add it to the map and continue on
        else hashTable.set(nums[i], true);
    }
    return false;
};

// Once the array is sorted than it's basically checking the indexes next to each other
var containsDuplicate3 = function(nums){
    
    // sort numbers in order first
    nums.sort((a, b) => a-b)
    
    // run the loop
    for (let i = 0; i < nums.length; i++){
        // check the corresponding indexes to compare value
        if (nums[i] === nums[i+1]){
            return true;
        }
    }
    return false
}