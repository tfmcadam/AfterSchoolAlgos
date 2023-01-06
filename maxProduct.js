/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [2, 3, -2, 4]
nums2 = [-2, 0, -1]

var maxProduct = function (nums) {
    // solves cases with 2 neg numbers
    let currentMin =  nums[0]
    // Max product in current array
    let currentMax =  nums[0]
    // Final max value
    let maxValue = nums[0]
    const n = nums.length
    // cycle through the array
    for (let i = 1; i < n; i++){
        let temp = currentMax;

        
        currentMax = Math.max(Math.max(currentMax * nums[i], currentMin * nums[i], nums[i]))
        // temp used in case currentMax is negative
        currentMin = Math.max(Math.max(temp * nums[i], currentMin * nums[i], nums[i]))
        
        // hight noted value
        maxValue = Math.max(currentMax, maxValue)
        
    }
    return maxValue
};

console.log(maxProduct(nums))
console.log("nums2")
console.log(maxProduct(nums2))