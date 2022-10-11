/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let key = keysPressed.charAt(0);

    for (let i = 1; i < releaseTimes.length; i++) {
        let duration = releaseTimes[i] - releaseTimes[i - 1];
        if (duration > max) {
            max = duration;
            key = keysPressed.charAt(i);
        } else if (duration === max) {
            key = key.localeCompare(keysPressed.charAt(i)) === -1 ? keysPressed.charAt(i) : key;
        }
    }

    return key;
};
