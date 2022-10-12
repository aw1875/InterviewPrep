/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */
function towerBreakers(n, m) {
    return (n % 2 === 0 || m === 1) ? 2 : 1;
}
