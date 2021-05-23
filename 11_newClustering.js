let str1 = "AAbbaa_AA";
let str2 = "BBBAA";

function solution(str1, str2) {
    function explode(text) {
        const result = [];
        for (let i = 0; i < text.length - 1; i++) {
            const node = text.substr(i, 2);
            if (node.match(/[A-Za-z]{2}/)) {
                result.push(node.toLowerCase());
            }
            }
            return result;
        }

        const arr1 = explode(str1);
        const arr2 = explode(str2);
        console.log(arr1, arr2);
        const set = new Set([...arr1, ...arr2]);
        let union = 0;
        let intersection = 0;

        console.log(set);
        set.forEach(item => {
            const has1 = arr1.filter(x => x === item).length;
            const has2 = arr2.filter(x => x === item).length;
            union += Math.max(has1, has2);
            intersection += Math.min(has1, has2);
            console.log(has1, has2);
        });

        console.log(union, intersection);

        return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

console.log(solution(str1, str2));