/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function countingSort(arr) {
    const result = new Array(100).fill(0);

    arr.forEach((i) => {
        result[i] += 1;
    });

    return result;
}
