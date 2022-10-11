/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const results = [];

    strs.forEach((str) => {
        const sortedWord = str.split('').sort().join('');

        if (results.find((v) => v.sorted === sortedWord)) {
            results.find((v) => v.sorted === sortedWord).words.push(str);
        } else {
            results.push({ sorted: sortedWord, words: [str] });
        }
    });

    return results.map((v) => (v.words)).reverse();
}
