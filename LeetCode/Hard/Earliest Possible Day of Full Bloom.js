/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    let total = [];
    for (let i = 0; i < plantTime.length; i++) {
        total.push([plantTime[i], growTime[i]]);
    }

    total.sort((a, b) => b[1] - a[1]);

    let time = 0, days = 0;
    for (let i = 0; i < total.length; i++) {
        time += total[i][0];
        days = Math.max(days, total[i][1] + time);
    };

    return days;
};
