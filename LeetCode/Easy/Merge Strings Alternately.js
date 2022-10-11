/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    let min = Math.min(word1.length, word2.length) === word1.length ? word1 : word2;

    for (let i = 0; i < min.length; i++) {
        result += `${word1[i]}${word2[i]}`;
    }

    return min === word1 ? result + word2.slice(min.length) : result + word1.slice(min.length);
};
