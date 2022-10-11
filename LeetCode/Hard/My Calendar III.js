var MyCalendarThree = function() {
    this.map = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function(start, end) {
    if (!this.map[start]) this.map[start] = 0;
    if (!this.map[end]) this.map[end] = 0;

    this.map[start]++;
    this.map[end]--;

    let result = 0, current = 0;

    for (const key in this.map) {
        current += this.map[key];
        result = Math.max(result, current);
    }

    return result;
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
