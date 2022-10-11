/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const integer = BigInt(digits.join('')) + 1n;
    return integer.toString().split('');
};
