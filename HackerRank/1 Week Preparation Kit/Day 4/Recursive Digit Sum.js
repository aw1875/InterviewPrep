/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */
function superDigit(n, k) {
    if (n <= 9) return n;
    let curr = Array.from(n, Number).reduce((a, b) => a + b) * k;
    return superDigit(curr.toString(), 1);
}
