/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    const timeArray = time.split("");
    const result = [];

    for (let i = 0; i < timeArray.length; i++) {
        const currentDigit = timeArray[i];

        if (currentDigit !== "?") {
            result.push(currentDigit);
        } else {
            switch (i) {
                case 0:
                    if (parseInt(timeArray[1]) < 4 || timeArray[1] === "?") result.push(2);
                    else result.push(1);
                    break;

                case 1:
                    if (parseInt(timeArray[0]) === 2 || timeArray[0] === "?") result.push(3);
                    else result.push(9);
                    break;

                case 3:
                    result.push(5);
                    break;

                case 4:
                    result.push(9);
                    break;
            }
        }
    }

    return result.join("");
};
