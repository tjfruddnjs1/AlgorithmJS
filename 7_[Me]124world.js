let n = 60;

function solution(n) {
    let answer = '';
    let loopIndex;

    while(n > 0){

        loopIndex  = n % 3;

        if(loopIndex == 0){
            n = n/3 - 1;
            answer = "4" + answer;
        }else if(loopIndex == 1){
            n = Math.floor(n/3);
            answer = "1" + answer;
        }else{
            n = Math.floor(n/3);
            answer = "2" + answer;
        }
    }
    return answer;
}

console.log(solution(n));