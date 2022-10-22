/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map();
    let l = 0, r = 0, match = 0, start = 0, end = s.length + 1;

    for (const c of t) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    
    while (r < s.length) {
        match = addHelper(s, r, map, match);

        while (match === t.length) {
            const window = r - l + 1;

            if (window < end) {
                start = l;
                end = window;
            }

            match = subHelper(s, l, map, match);
            l++;
        }

        r++;
    }
    
    return end <= s.length ? s.slice(start, start + end) : ""
};

const addHelper = (s, r, map, match) => {
    const char = s[r];
    
    if (map.has(char)) {
        map.set(char, map.get(char) - 1);
        
        if (map.get(char) >= 0) match++;
    }
    
    return match;
}

const subHelper = (s, l, map, match) => {
    const char = s[l];
    
    if (map.has(char)) {
        if (map.get(char) === 0) match--;
        map.set(char, map.get(char) + 1);
    }
    
    return match;
}
