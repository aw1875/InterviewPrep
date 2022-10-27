/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const temp1 = [];
    const temp2 = [];
    const overlap = new Map();

    for (let i = 0; i < img1.length; i++) {
        for (let j = 0; j < img1.length; j++) {
            img1[i][j] && temp1.push({ row: i, col: j });
            img2[i][j] && temp2.push({ row: i, col: j });
        }
    }

    temp1.forEach((i) => {
        temp2.forEach((j) => {
            const tempKey = `(${i.row - j.row}), (${i.col - j.col})`;
            overlap.set(tempKey, (overlap.get(tempKey) || 0) + 1);
        });
    });

    return Math.max(...overlap.values(), 0);
};
