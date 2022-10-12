/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */
function palindromeIndex(s) {
    if (s === s.split('').reverse().join('')) return -1;

    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) break;
        else {
            l++;
            r--;
        }
    }

    const helper = (s, i) => {
        let l = 0, r = s.length - 1;
        while (l < r) {
            if (l === i) l++;
            if (r === i) r--;
            if (s[l] !== s[r]) return false;
            else {
                l++;
                r--;
            }
        }

        return true;
    };

    return helper(s, l) ? l : r;
}
