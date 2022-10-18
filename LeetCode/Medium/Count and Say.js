/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    const currentString = countAndSay(n - 1);
    let index = 0, currentChar = currentString[0], result = "";

    for (let i = 1; i < currentString.length; i++) {
        if (currentString[i] !== currentChar) {
            result += `${i - index}${currentChar}`;
            index = i;
            currentChar = currentString[i];
        }
    }

    result += `${currentString.length - index}${currentChar}`;
    return result;
};
