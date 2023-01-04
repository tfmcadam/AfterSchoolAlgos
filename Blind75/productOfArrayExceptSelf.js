
var productExceptSelf = function(nums){
    let left = 1;
    let right = 1;
    let product = [];

    // create product array [1,2,6,24]
    for (let i = 0; i < nums.length; i++){
        product[i] = left;
        left *= nums[i];
    }
    // reverse the order and multiply right * left
    for (let i = nums.length -1; i > -1; i--){
        product[i] = right * product[i]; //left * right
        right *= nums[i];
    }
    return product
}


var productExceptSelf = function(nums){
    let prodArr = [];
    for (let i = 0; i < nums.length; i++){
        let temp = null;
        for ( let j = 0; j < nums.length; j++){
            if (nums[j] == nums[i]){
                continue;
            }
            if ( temp == null ){
                temp = nums[j];
            }
            else {
                temp *= nums[j];
            }
        }
        prodArr.push(temp);
    }
    return prodArr;
}

//product = []