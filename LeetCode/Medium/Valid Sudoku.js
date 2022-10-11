/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const cols = {};
    const rows = {};
    const squares = {};

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const square = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

            if (board[r][c] === ".")
                continue;

            if (!rows[r])
                rows[r] = new Set();

            if (!cols[c])
                cols[c] = new Set();

            if (!squares[square])
                squares[square] = new Set();

            if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || squares[square].has(board[r][c])) {
                return false;
            }

            cols[c].add(board[r][c]);
            rows[r].add(board[r][c]);
            squares[square].add(board[r][c]);
        }
    }

    return true;
};
