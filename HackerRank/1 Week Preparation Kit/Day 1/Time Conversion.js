/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    let am = s.slice(-2) === "AM";
    const time = s.slice(0, -2).split(":");

    if (am && time[0] === 12) return `00:${time[1]}:${time[2]}`;
    else if (am) return `${time[0]}:${time[1]}:${time[2]}`;
    else if (!am && time[0] === 12) return `${time[0]}:${time[1]}:${time[2]}`;
    else return `${parseInt(time[0]) + 12}:${time[1]}:${time[2]}`;
}
