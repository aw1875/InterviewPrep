/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */
function cookies(k, A) {
    A.sort((a, b) => a - b);
    const cookies = [];

    if (A[0] >= k) return 0;
    if (A.length < 2) return -1;

    let i = 0, j = 0, counter = 0;
    while (i < A.length || j < cookies.length - 1) {
        cookies.push(i >= A.length ? cookies[j++] + 2 * cookies[j++] : [1, 2]
            .map((c) => (A[i] < cookies[j] || j >= cookies.length) ? c * A[i++] : c * cookies[j++])
            .reduce((a, b) => a + b, 0));

        counter++;

        if ((A[i] >= k || i >= A.length) && cookies[j] >= k) return counter;
    }

    return -1;
}
