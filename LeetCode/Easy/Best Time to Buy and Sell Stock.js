/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let slow = 0;
    let fast = 1;
    let profit = 0;

    while (fast < prices.length) {
        if (prices[slow] < prices[fast])
            profit = Math.max(prices[fast] - prices[slow], profit);
        else
            slow = fast;

        fast++;
    }

    return profit;
};
