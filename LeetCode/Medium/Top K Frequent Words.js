/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordsMap = {};

    words.forEach((w) => {
        if (wordsMap.hasOwnProperty(w)) wordsMap[w] += 1;
        else wordsMap[w] = 1;
    });

    const result = Object.keys(wordsMap).sort((a, b) => {
        if (wordsMap[b] - wordsMap[a] !== 0) return wordsMap[b] - wordsMap[a];

        return a.localeCompare(b);
    });

    return result.slice(0, k);
};
