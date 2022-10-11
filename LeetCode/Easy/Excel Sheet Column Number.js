/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0, exp = 0;

    for (let i = columnTitle.length - 1; i >= 0; i--) {
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, exp);
        exp++;
    }

    return result;
};
