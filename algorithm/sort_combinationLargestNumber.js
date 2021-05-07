let arr = [3, 30 ,5 , 34, 9];

function solution(numbers) {
    var answer = numbers.map(v => v + '')
        .sort((a, b)=> (b + a) * 1  - (a + b) * 1 )
        .join('');

    console.log(answer);

    return answer[0]==='0'?'0':answer;
}

console.log(solution(arr));