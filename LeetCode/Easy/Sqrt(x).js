/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x === 0 ? 0 : 1;

    let left = 0;
    let right = x;
    let mid;

    while (left <= right) {
        mid = Math.floor((right + left) / 2);

        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return Math.floor(mid);
        } else if (x < mid * mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return mid;
};
