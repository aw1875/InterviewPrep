/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;

    for (let i = 0, j = 0; i < colors.length; i++) {
        time += neededTime[i];
        j = Math.max(j, neededTime[i]);

        if (colors[i] !== colors[i + 1]) { time -= j; j = 0; }
    }

    return time;
};
