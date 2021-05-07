let parti = ["leo", "kiki", "eden"];
let compl = ["eden", "kiki"];

function solution(participant, completion) {
    answer = '';
    hash = {};

    participant.forEach(v => {
        hash[v] = hash[v] || 0;
        console.log(hash);
        hash[v] += 1;
    });

    console.log(hash);

    completion.forEach(v => {
        hash[v] -= 1;
    });

    console.log(hash);

    for(let key in hash)
        if (hash[key]) return key;
}   

console.log(solution(parti, compl));