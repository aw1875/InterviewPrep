/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    console.log(arr.filter((i) => i > 0).length / arr.length);
    console.log(arr.filter((i) => i < 0).length / arr.length);
    console.log(arr.filter((i) => i === 0).length / arr.length);
}
