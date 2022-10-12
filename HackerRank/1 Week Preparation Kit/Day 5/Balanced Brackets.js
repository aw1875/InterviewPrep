/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function isBalanced(s) {
    const stack = [];
    const open = ["(", "{", "["];

    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];

        if (open.includes(currChar)) stack.push(currChar);
        else {
            if (stack.length === 0) return "NO";
            else {
                const lastChar = stack[stack.length - 1];
                if ((lastChar === "(" && currChar === ")") ||
                    (lastChar === "{" && currChar === "}") ||
                    (lastChar === "[" && currChar === "]"))
                    stack.pop();
                else return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}
