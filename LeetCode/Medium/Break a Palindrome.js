/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const result = palindrome.split('');

    for (let i = 0; i < Math.floor(result.length / 2); i++) {
        if (result[i] !== "a") return `${result.slice(0, i).join('')}a${result.slice(i + 1).join('')}`
    }

    return result.length > 1 ? `${result.slice(0, -1).join('')}b` : "";
};
