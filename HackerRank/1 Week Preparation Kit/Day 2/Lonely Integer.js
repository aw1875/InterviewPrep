/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
function lonelyinteger(a) {
    const map = new Map();

    a.forEach((i) => {
        if (!map.has(i)) map.set(i, 1);
        else map.set(i, map.get(i) + 1);
    });

    for (const [k, v] of map) {
        if (v === 1) return k;
    }
}
