// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

Input: nums2 = [0, 1, 1]
// Output: []

Input: nums3 = [0, 0, 0]
// Output: [[0, 0, 0]]

// only stores 1 triplet and doesn't keep others
// need to add a hash table

var threeSum = function (nums) {
    let output = []
    
    let n = nums.length
    for(let i = 0; i < n-2; i++ ){
        for (let j = 1; j < n-1; j++){
            for (let k = 2; k < n; k++){
                if(nums[i] + nums[j] + nums[k] == 0)
                    output = [nums[i], nums[j], nums[k]]

            }
        }
    }
    return output
};


// This solution has a time complexity of O(n^2) and a space complexity of O(n)
function threeSum2(nums){
    // triplet array
    let triplets = [];
    // set of seen triplet to compare
    let seen = new Set();
    // sort the arrays in order from smallest to biggest
    nums.sort((a,b) => a-b);

    // loop through array
    for (let i = 0; i < nums.length; i++){
        // continue through loop if i > 0 and nums[i] is equal to the index before
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length-1;

        // loop through j and k until they meet
        while( j< k){ 
            // sum the triplet
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0){
                // place the triplet in an array
                let triplet = [nums[i], nums[j], nums[k]]
                // make a string to be stored in set
                let key = triplet.toString();
                
                // if the triplet is not already in triplets push to triplets
                if(!seen.has(key)){
                    triplets.push(triplet)
                    //  and add to seen(SET()) to be compared the next iteration
                    seen.add(key)
                    
                }
                // move to next indexes
                j++;
                k--;
            }else if (sum < 0){
                // if neg go to next j/i+1
                j++;
            } else{
                // if greater than 0 go to next k/i-1
                k--;
            }
        }
    }
    return triplets
}

// more efficient  than previous function as this only has on variable(result) vs multiple storage points
var threeSum3 = function (nums){
    // create an empty array
    let result = [];
    // sort the current array
    nums.sort((a,b) => a-b);
    // loop it
    for (let i = 0; i < nums.length; i++){
        // continue the loop if i is greater than zero and if i is the same as the previous making the same result
        if ( i > 0 && nums[i] === nums[i-1]) continue;
        // make variables to go through the loop and meet in the middle
        let  left = i + 1, right = nums.length-1;
        // loop through left and right until they meet
        while (left < right){
            // add the three up
            let sum = nums[i] + nums[left] + nums[right];
            // if the sum is what we are looking for, here's what we do
            if (sum === 0){
                // push the triplet array to the result
                result.push([nums[i], nums[left], nums[right]]);
                // to eliminate repeat array, if the next i is the same as the previous move on until left meets right 
                // we do this for the left and right side 
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
                // since ordered as left++ number increases
            } else if (sum < 0){
                left++;
                // right side descends in value
            } else{
                right--;
            }
        }
        // once left and right meet we exit the while loop and go to next i in for loop
    }
    return result;
}





console.log(threeSum(nums))
console.log(threeSum(nums2))
console.log(threeSum(nums3))

console.log(threeSum2(nums))
console.log(threeSum2(nums2))
console.log(threeSum2(nums3))

console.log(threeSum3(nums))
console.log(threeSum3(nums2))
console.log(threeSum3(nums3))