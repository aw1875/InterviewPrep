/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let result = 0;

    const traverse = (i, current) => {
        if (current.length !== new Set(current.split('')).size) return;

        result = Math.max(result, current.length);

        for (let j = i; j < arr.length; j++) {
            traverse(j + 1, `${current}${arr[j]}`);
        }
    }

    traverse(0, '');
    return result;
};
