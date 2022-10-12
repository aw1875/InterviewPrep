Array.prototype.customReduce = function(cb) {
    let result = 0;

    for (let i = 0; i < this.length; i++) {
        cb(result = result + this[i])
    }

    return result;
};

(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 9, 0];
    console.log("\033[94mRunning Reduce Tests\033[0m");
    for (let i = 0; i < arr.length; i++) {
        const r = arr.reduce((a, b) => a + b, 0);
        const cr = arr.customReduce((a, b) => a + b, 0);

        if (r === cr) console.log("\033[92m✓ Test Case " + (i + 1) + " Passed\033[0m");
        else console.log("\033[91m✗ Test Case " + (i + 1) + " Failed\033[0m");
    }
})();
