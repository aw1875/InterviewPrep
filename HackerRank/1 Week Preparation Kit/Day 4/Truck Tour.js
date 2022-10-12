/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */
function truckTour(petrolpumps) {
    let startIndex = 0;
    let loopSum = 0;
    for (let i = 0; i < petrolpumps.length; i++) {
        const [amount, distance] = petrolpumps[i];
        loopSum += amount - distance;
        if (loopSum < 0) {
            loopSum = 0;
            startIndex = i + 1;
        }
    }

    return startIndex;
}
