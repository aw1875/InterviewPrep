/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const letters = new Array(26).fill(null);

    for (let i = 0; i < sentence.length; i++) {
        const charCode = sentence.charCodeAt(i) - 97;
        letters[charCode] = 1;
    }

    return !letters.includes(null);
};
