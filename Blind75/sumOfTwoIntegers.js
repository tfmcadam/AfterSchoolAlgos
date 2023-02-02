/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Input: a = 1, b = 2
// Output: 3

Inpu1: a = 2, b = 3
// Output: 5

var getSum = function (a, b) {
    let carry;
    while (a !== 0){
        carry = a & b;
        b = a ^ b;
        a = carry << 1;
    }
    return b
};

console.log(getSum(1, 2))
console.log(getSum(2, 3))