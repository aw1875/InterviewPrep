/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(arr) {
    // R -> L
    let rl = 0;
    for (let i = 0; i < arr.length; i++) {
        rl += arr[i];
    }

    // L -> R
    let lr = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        lr += arr[i];
    }

    console.log(rl, lr)
}
