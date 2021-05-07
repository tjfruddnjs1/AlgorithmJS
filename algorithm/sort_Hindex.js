let array = [3, 0, 6, 1, 5];

function solution(citations) {
    citations.sort((a,b) => a-b);
    let middleIndex = Math.floor(citations.length/2);

    if(citations.length % 2 == 0){
        middleIndex += 1;

        while(true){
            if(citations[middleIndex] <= citations.slice(middleIndex,).length) break;
            else middleIndex--;
        }
    }else{
        while(true){
            if(citations[middleIndex] <= citations.slice(middleIndex,).length) break;
            else middleIndex--;
        }
    }
    
    return citations[middleIndex];
}

console.log(solution(array));