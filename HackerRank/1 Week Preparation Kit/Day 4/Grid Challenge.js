/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */
function gridChallenge(grid) {
    let result = "YES";

    // Sort rows
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort((a, b) => a.localeCompare(b)).join('');
    }

    // Check cols
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length - 1; j++) {
            if (grid[j][i] > grid[j + 1][i]) {
                result = "NO";
                break;
            }
        }
    }

    return result;
}
