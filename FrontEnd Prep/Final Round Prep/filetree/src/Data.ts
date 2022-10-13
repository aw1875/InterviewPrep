export const filetree = {
    name: "Interview Prep",
    children: [
        {
            name: "LeetCode",
            children: [
                {
                    name: "Easy",
                    children: [
                        {
                            name: "Add Binary.js",
                            content: `/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt(\`0b\${a}\`) + BigInt(\`0b\${b}\`)).toString(2);
};` },
                        {
                            name: "Binary Search.js",
                            content: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return nums.findIndex((i) => i === target);
};`
                        },
                        {
                            name: "Contains Duplicate.js",
                            content: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};`
                        },
                        {
                            name: "Fizz Buzz.js",
                            content: `/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
    }

    return result;
};`
                        },
                        {
                            name: "Happy Number.js",
                            content: `/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const hasSeen = [];
    while (n !== 1 && !hasSeen.includes(n)) {
        hasSeen.push(n);
        n = n.toString().split('').reduce((a, b) => a + Math.pow(b, 2), 0);
    }

    return n === 1;
};`
                        },
                    ],
                },
                {
                    name: "Medium",
                    children: [
                        {
                            name: "Break a Palindrome.js",
                            content: `/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const result = palindrome.split('');

    for (let i = 0; i < Math.floor(result.length / 2); i++) {
        if (result[i] !== "a") return \`\${result.slice(0, i).join('')}a\${result.slice(i + 1).join('')}\`
    }

    return result.length > 1 ? \`\${result.slice(0, -1).join('')}b\` : "";
};`
                        },
                        {
                            name: "Group Anagrams.js",
                            content: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const results = [];

    strs.forEach((str) => {
        const sortedWord = str.split('').sort().join('');

        if (results.find((v) => v.sorted === sortedWord)) {
            results.find((v) => v.sorted === sortedWord).words.push(str);
        } else {
            results.push({ sorted: sortedWord, words: [str] });
        }
    });

    return results.map((v) => (v.words)).reverse();
}`
                        }
                    ],
                },
                {
                    name: "Hard",
                    children: [
                        {
                            name: "Median of Two Sorted Arrays.js",
                            content: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const half = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0)
        return (merged[half - 1] + merged[half]) / 2;
    return merged[half];
};`
                        }
                    ],
                },
            ],
        },
        {
            name: "HackerRank",
            children: [
                {
                    name: "1 Week Preparation Kit",
                    children: [
                        {
                            name: "Day 1",
                            children: [
                                {
                                    name: "Plus Minus.js",
                                    content: `/**
 * @param {number[]} arr
 * @return {null}
 */
function plusMinus(arr) {
    console.log(arr.filter((i) => i > 0).length / arr.length);
    console.log(arr.filter((i) => i < 0).length / arr.length);
    console.log(arr.filter((i) => i === 0).length / arr.length);
}`
                                },
                                {
                                    name: "Mini-Max Sum.js",
                                    content: `/**
 * @param {number[]} arr
 * @return {null}
 */
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const min = arr.slice(0, 4).reduce((a, b) => a + b);
    const max = arr.slice(1).reduce((a, b) => a + b);

    console.log(\`\${min} \${max}\`);
}`
                                }
                            ]
                        }
                    ]
                }
            ],
        }
    ]
}
