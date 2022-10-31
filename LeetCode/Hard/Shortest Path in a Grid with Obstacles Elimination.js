/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    if (grid.length === 0) return 0;

    const m = grid.length, n = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = new Set();
    visited.add(`0-0-${k}`);

    let steps = 0, q = [[0, 0, k]];

    while (q.length > 0) {
        let next = [];

        while (q.length > 0) {
            let [x, y, remainder] = q.pop();

            if (x === m - 1 && y === n - 1) return steps;

            for (const direction of directions) {
                let row = x + direction[0], col = y + direction[1];

                if (row < 0 || col < 0 || row >= m || col >= n ||
                    (grid[row][col] === 1 && remainder === 0)) continue;

                let newK = grid[row][col] === 1 ? remainder - 1 : remainder;
                let key = `${row}-${col}-${newK}`;

                if (!visited.has(key)) {
                    visited.add(key);
                    next.push([row, col, newK]);
                }
            }
        }

        q = next;
        steps++;
    }

    return -1;
};
