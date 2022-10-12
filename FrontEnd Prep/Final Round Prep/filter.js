Array.prototype.customFilter = function(n) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (n(this[i])) result.push(this[i]);
    }

    return result;
};

(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 9, 0];
    console.log("\033[94mRunning Filter Tests\033[0m");
    for (let i = 0; i < arr.length; i++) {
        const f = arr.filter((a) => a === i);
        const cf = arr.customFilter((a) => a === i);

        if (f.join('') === cf.join('')) console.log("\033[92m✓ Test Case " + (i + 1) + " Passed\033[0m");
        else console.log("\033[91m✗ Test Case " + (i + 1) + " Failed\033[0m");
    }
})();
