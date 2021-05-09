let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = 	[31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    let answer = [];
    let gradeCount = 0;
    let zeroCount = 0;

    for(let v in lottos){
        if(win_nums.includes(lottos[v])) gradeCount++;
        else if(lottos[v] == 0) zeroCount++;
    }

    if(gradeCount == 0){
        answer.push(7-(gradeCount+zeroCount), 6);
    }else if(gradeCount == 0 && zeroCount == 0){
        answer.push(6, 6);
    }else{
        answer.push(7-(gradeCount+zeroCount), 7-gradeCount);
    }

    return answer;
}

console.log(solution(lottos, win_nums));