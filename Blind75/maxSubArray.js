nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

var maxSubArray = function (nums){
    let maxSum = Math.min(...nums); // find min in the array
    const n = nums.length;
    for (let i = 0; i < n; i++){
        for ( let j = i; j< n; j++){
            let sum = 0;
            for ( let k = i; k < n; k++){
                sum = sum += nums[k]
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum
}
console.log(maxSubArray(nums))

var subArray = function (nums){
    let currentSum = nums[0]
    let maxSum = currentSum
    const n = nums.length
    for ( let i = 0; i < n; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(subArray(nums))