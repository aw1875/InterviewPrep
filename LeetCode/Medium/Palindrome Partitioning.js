/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const currentPartition = [];
    dfs(s, currentPartition, result);

    return result;
};

const dfs = (s, currentPartition, result) => {
    if (s.length === 0) {
        result.push([...currentPartition]);
        return;
    }

    for (let i = 1; i <= s.length; i++) {
        const prefix = s.substring(0, i);
        const postfix = s.substring(i);

        if (prefix === prefix.split('').reverse().join('')) {
            currentPartition.push(prefix);
            dfs(postfix, currentPartition, result);
            currentPartition.pop();
        }
    }

    return;
};
