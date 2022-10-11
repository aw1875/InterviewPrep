/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let peopleArray = [];

    for (let i = 0; i < names.length; i++) {
        peopleArray.push({ name: names[i], height: heights[i] });
    };

    peopleArray.sort((a, b) => b.height - a.height);
    return peopleArray.map((i) => i.name);
};
