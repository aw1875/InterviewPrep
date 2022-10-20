/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const IArr = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const XArr = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
    const CArr = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const MArr = ["", "M", "MM", "MMM"]

    return `${MArr[Math.floor(num / 1000)]}${CArr[Math.floor((num % 1000) / 100)]}${XArr[Math.floor((num % 100) / 10)]}${IArr[num % 10]}`;
}
