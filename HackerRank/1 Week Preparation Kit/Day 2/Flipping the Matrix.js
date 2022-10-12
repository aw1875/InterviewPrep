/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function flippingMatrix(matrix) {
    let sum = 0;

    for (let i = 0; i < matrix.length / 2; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            let currentSum = 0;
            currentSum = Math.max(matrix[i][j], currentSum);
            currentSum = Math.max(matrix[i][matrix.length - 1 - j], currentSum);
            currentSum = Math.max(matrix[matrix.length - 1 - i][j], currentSum);
            currentSum = Math.max(matrix[matrix.length - 1 - i][matrix.length - 1 - j], currentSum); 21

            sum += currentSum;
        }
    }

    return sum;
}
