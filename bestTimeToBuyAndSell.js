test1 = [3,5,4,1,7,6,4]
test2 = [1,2,34,12,65,43,67,76]



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
        }
        else if (prices[i] - buy > maxProfit) {
            maxProfit = prices[i] - buy
        }
    }
    return maxProfit
};

console.log(maxProfit(test1)) //output 6
console.log(maxProfit(test2)) //output 75