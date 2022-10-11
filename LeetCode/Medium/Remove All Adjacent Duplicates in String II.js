/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (stack.length !== 0 && stack[stack.length - 1][0] == s[i]) {
            stack[stack.length - 1][1] += 1
        } else {
            stack.push([s[i], 1])
        }

        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }

    let resultString = ""
    for (let i = 0; i < stack.length; i++) {
        resultString += stack[i][0].repeat(stack[i][1]);
    }
    return resultString;
};
