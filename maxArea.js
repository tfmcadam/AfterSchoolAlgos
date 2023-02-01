/**
 * @param {number[]} height
 * @return {number}
 */

Input: height2 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

Input: height3 = [1, 1]
// Output: 1


var maxArea = function(height){
    let i = 0
    let j = height.length - 1
    let max = 1
    let area

    if (height.length === 2) {
        max = height[i] * height[j]
        return max
    }


    while (i < j){
        area = (j-1) * Math.min(height[i], height[j])
        max = Math.max(area, max)
        height[i] < height[j] ? i++ : j--;
    }
    return max
};

console.log(height2)
console.log(maxArea(height2))
console.log(maxArea(height3))

