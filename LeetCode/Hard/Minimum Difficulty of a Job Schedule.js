/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    if (jobDifficulty.length < d) return -1;

    const dayStack = {};

    const traverse = (startDay, totalDays) => {
        if (totalDays === d) return startDay === jobDifficulty.length ? 0 : Infinity;

        const key = `${startDay}#${totalDays}`;
        if (dayStack[key] !== undefined) return dayStack[key];

        const endDay = jobDifficulty.length - d + totalDays;

        let result = Infinity;
        let currentMax = -Infinity;
        for (let i = startDay; i <= endDay; i++) {
            currentMax = Math.max(currentMax, jobDifficulty[i]);
            result = Math.min(result, traverse(i + 1, totalDays + 1) + currentMax);
        }

        return dayStack[key] = result;
    }

    return traverse(0, 0);
};
