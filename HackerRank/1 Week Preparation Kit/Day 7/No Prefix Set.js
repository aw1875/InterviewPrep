/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */
function noPrefix(words) {
    const prefixes = new Set();
    const checked = new Set();

    for (const word of words) {
        if (prefixes.has(word)) {
            console.log(`BAD SET\n${word}`);
            return;
        }

        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i);

            if (checked.has(prefix)) {
                console.log(`BAD SET\n${word}`);
                return;
            }

            prefixes.add(prefix);
        }

        checked.add(word);
    }

    console.log("GOOD SET");
}
