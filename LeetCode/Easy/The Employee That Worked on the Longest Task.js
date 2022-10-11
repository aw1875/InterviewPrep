/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let max = logs[0][1];
    let workerId = logs[0][0];

    let i = 1;
    while (i < logs.length) {
        const time = logs[i][1] - logs[i - 1][1];
        if (time > max) {
            max = time;
            workerId = logs[i][0]
        } else if (time === max) {
            workerId = Math.min(workerId, logs[i][0])
        }
        i++;
    }

    return workerId;
};
