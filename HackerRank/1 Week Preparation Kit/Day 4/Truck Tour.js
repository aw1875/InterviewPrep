/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */
function truckTour(petrolpumps) {
    let sum = 0, start = 0;

    /**
     * i -> index
     * p -> petrol
     * d -> distance
     * in petrolpumps
     */
    for (const [i, [p, d]] of petrolpumps.entries()) {
        sum += p - d;

        if (sum < 0) {
            sum = 0;
            start = i + 1;
        }
    }

    return start;
}
