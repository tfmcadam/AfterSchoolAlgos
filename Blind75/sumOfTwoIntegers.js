/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Input: a = 1, b = 2
// Output: 3

Inpu1: a = 2, b = 3
// Output: 5

// this function breaks the numbers into binary addition operation 

var getSum = function (a, b) {
    let carry;
    // repeat the addition opperation until "a" becomes 0
    while (a !== 0){
        // calculate the carry using the bitwise AND
        carry = a & b;
        // calculate the sum  of "a" and "b" using bitwise XOR
        b = a ^ b;
        // shift the carry left one bit
        a = carry << 1;
    }
    return b
};

console.log(getSum(1, 2))
console.log(getSum(2, 3))