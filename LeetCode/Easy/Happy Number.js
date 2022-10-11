/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const hasSeen = [];
    while (n !== 1 && !hasSeen.includes(n)) {
        hasSeen.push(n);
        n = n.toString().split('').reduce((a, b) => a + Math.pow(b, 2), 0);
    }

    return n === 1;
};
