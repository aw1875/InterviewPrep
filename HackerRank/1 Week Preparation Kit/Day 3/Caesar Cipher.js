/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
    const n = k > 0 ? k : 26 + (k % 26);
    return [...s].map((l, i) => {
        const char = s.charCodeAt(i);

        if (char >= 65 && char <= 90) return String.fromCharCode(((char - 65 + n) % 26) + 65);
        else if (char >= 97 && char <= 122) return String.fromCharCode(((char - 97 + n) % 26) + 97);
        else return l;
    }).join('');
}
