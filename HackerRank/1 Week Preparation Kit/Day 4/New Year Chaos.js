/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */
function minimumBribes(q) {
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        const curr = q[i];
        if (curr - (i + 1) > 2) { console.log("Too chaotic"); return; }

        for (let j = Math.max(0, curr - 2); j < i; j++) {
            if (q[j] > curr) bribes++;
        }
    }

    console.log(bribes);
}
