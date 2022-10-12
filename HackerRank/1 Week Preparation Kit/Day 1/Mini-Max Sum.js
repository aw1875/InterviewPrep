/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const min = arr.slice(0, 4).reduce((a, b) => a + b);
    const max = arr.slice(1).reduce((a, b) => a + b);

    console.log(`${min} ${max}`);
}
