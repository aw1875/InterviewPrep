/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function flippingMatrix(matrix) {
    let sum = 0, mid = matrix.length / 2;

    // Only need to go half way l and h
    for (let i = 0; i < mid; i++) {
        for (let j = 0; j < mid; j++) {

            // Get all 4 matrices
            const matrix1 = matrix[i][j];
            const matrix2 = matrix[i][(mid * 2) - j - 1];
            const matrix3 = matrix[(mid * 2) - i - 1][j];
            const matrix4 = matrix[(mid * 2) - i - 1][(mid * 2) - j - 1];

            // Add max matrix to sum;
            sum += Math.max(matrix1, matrix2, matrix3, matrix4);
        }
    }

    return sum;
}
