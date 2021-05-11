let input = [1,2,7,6,4];

function combination(arr, m){
    //순서대로 각 조합을 담을 배열  
    const combination = [];
    //선택한 요소의 인덱스 배열
    const picked = [];
    //중복 요소 제거를 위한 배열
    const used = [];

    for(element of arr) used.push(0);
    
    function find(picked){
        if(picked.length === m){
            const rst = [];
            for(let i of picked){
                rst.push(arr[i]);
            }
            combination.push(rst);
            return;
        }else{
            //picked 존재시 길이보다 1 큰수를, 없다면 0을 start로 선언
            let start = picked.length ? picked[picked.length-1] + 1 : 0;

            for(let i = start;i<arr.length;i++){
                // 첫 원소일 때, arr[i]와 arr[i-1]이 같지 않을 때, used[i-1]이 이미 뽑혀서 1인 경우
                if(i === 0 || arr[i] !== arr[i-1] || used[i-1]){
                    picked.push(i);
                    used[i] = 1;
                    find(picked);
                    picked.pop();
                    used[i] = 0;
                }
            }
        }
    }
    find(picked);
    return combination;
}

function solution(nums) {
    let combinations;
    let index = 0;

    //3개의 합의 모든 조합 구하기
    combinations = combination(nums,3);

    combinations.map(v => {
            combinations[index++] = v.reduce((acc,cur) => acc+cur);
        }
    );

    let answer = combinations.length;

    //소수인지 판별
    for(let i in combinations){
        let bigNum = parseInt(combinations[i]/2);
        while(true){
            if(bigNum <= 2) break;
            if(combinations[i] % bigNum == 0) {
                answer--;
                break;
            }
            bigNum--;
        }
    }
    return answer;
}

console.log(solution(input));
