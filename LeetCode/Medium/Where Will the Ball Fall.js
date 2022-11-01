/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const answers = [];
    for (let i = 0; i < grid[0].length; i++) {
        let r = i;

        for (let j = 0; j < grid.length; j++) {
            let c = r + grid[j][r];

            if (c < 0 || c >= grid[0].length || grid[j][c] !== grid[j][r]) {
                r = -1;
                break;
            }

            r = c;
        }

        answers.push(r);
    }

    return answers;
};
