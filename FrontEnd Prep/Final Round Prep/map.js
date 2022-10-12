Array.prototype.customMap = function(cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }

    return result;
};

(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 9, 0];
    console.log("\033[94mRunning Map Tests\033[0m");
    for (let i = 0; i < arr.length; i++) {
        const m = arr.map((a) => a);
        const cm = arr.customMap((a) => a);

        if (m.join('') === cm.join('')) console.log("\033[92m✓ Test Case " + (i + 1) + " Passed\033[0m");
        else console.log("\033[91m✗ Test Case " + (i + 1) + " Failed\033[0m");
    }
})();
