/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = 2147483648;
    if (x > MAX || x < (MAX * - 1)) return 0;

    const numsArr = x.toString().split("");
    if (numsArr[0] === "-") {
        const val = parseInt(numsArr.reverse().join(''));
        return val > MAX ? 0 : val * -1;
    } else {
        const val = parseInt(numsArr.reverse().join(''));
        return val > MAX ? 0 : val;
    }
};
