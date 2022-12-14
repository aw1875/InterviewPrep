/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * 1. INTEGER k
 * 2. INTEGER_ARRAY arr
 */
function pairs(k, arr) {
    const values = new Set(arr);
    let pairs = 0;

    for (const num of arr) {
        if (values.has(num - k)) pairs++;
    }

    return pairs;
}
