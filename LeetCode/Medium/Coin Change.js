/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;
    if (coins.length === 1 && amount % coins[0] !== 0) return -1;

    const result = new Array(amount + 1).fill(Infinity);
    result[0] = 0;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            result[i] = Math.min(result[i], result[i - coin] + 1);
        }
    }

    return result[amount] === Infinity ? -1 : result[amount];
};
