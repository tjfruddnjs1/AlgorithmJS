let input = "AAAAAAABBCCCDEEEEFFFFFFG"

function huffman(input){
    // 문자 출현 빈도수를 내림차순 정렬을 위한 배열
    let charCountArray = [];

    // 1. 입력(input) 문자열에서 출현 빈도수에 따라 charCountArray 배열에 저장 
    for(let v in input){
        if(isNaN(charCountArray[v]) && !charCountArray.includes(input[v])){
            charCountArray.push(input[v] , 1);
        }else if(charCountArray.includes(input[v])){
            let findCharIndex = charCountArray.indexOf(input[v]);
            charCountArray[findCharIndex+1] +=1;
        }
    }

    console.log(charCountArray);

    // 트리 구조를 문자열로 표현하기 위한 통합 배열 
    let integratedArray = [];
    // 각 단어를 담을 배열
    let charBinaryArray = [];

    // 2. charBinaryArray, integratedArray 배열 초기화
    for(let v=0;v<charCountArray.length;v++){
        charBinaryArray.push([charCountArray[v]]);
        integratedArray.push([charCountArray[v++],charCountArray[v]]);
    }

    console.log(integratedArray, charBinaryArray);

    // 3. 빈도수가 적은 2개의 요소를 뽑아 합친 후 내림차순 정렬
    while(integratedArray.length != 1){
        integratedArray.sort((a,b)=> b[1] - a[1]);
        console.log(integratedArray);

        let rightTreeElement = integratedArray.pop();
        let leftTreeElement = integratedArray.pop();
        let sumChar;
        
        // 3-1. 트리의 깊이를 표현하기 위한 [] 사용 
        if(integratedArray.length == 0){
            sumChar = '[0' + leftTreeElement[0] + '&1' + rightTreeElement[0] + ']';
            
        }else{
            sumChar = '[0' + leftTreeElement[0] + '1' + rightTreeElement[0] + ']';
        }
        
        let sumNumber = leftTreeElement[1] + rightTreeElement[1];

        integratedArray.push([sumChar, sumNumber]);
    }

    console.log(integratedArray);
    

    // 비트로된 코드로 저장하기 위한 배열
    let answerArray = [];
    // 배열 이전 요소가 닫혔는지 확인하기 위한 flag
    let isClosed = 0;
    // & 기준으로 startIndex를 나누기 위한 변수
    let startIndex;

    // 4. 저장된 문자열을 비트로 변환하기 위한 수행 코드
    for(let i = 0; i < charBinaryArray.length; i++){
        // 4-1. 해당 원소가 어느 index에 저장되었는지 확인하기 위한 변수
        let charIndex = integratedArray[0][0].indexOf(charBinaryArray[i]);
        
        // 4-2. & 기준으로 왼쪽인지 오른쪽인지 판단하기 위한 > 반복문을 줄이기 위한 작업
        if(integratedArray[0][0].indexOf('&') < charIndex) startIndex = integratedArray[0][0].indexOf('&');
        else startIndex = 1;

        // 4-3. '[' : 열림 , ']' : 닫힘 을 기준으로 깊이를 판단하고 '[' 기준으로 비트 ']' 기준으로 깊이를 판단
        for(let j = startIndex; j <= charIndex; j++){
            // 열림 키워드 : '[', 닫힘 키워드 : ']'
            let openKeyword = integratedArray[0][0].indexOf('[', j);
            let closeKeyword = integratedArray[0][0].indexOf(']', j);

            if(closeKeyword == j) isClosed++;

            if(openKeyword <= j){
                answerArray[charBinaryArray[i]] += integratedArray[0][0].substring(openKeyword-1,openKeyword);
            }

            if(j==charIndex){
                answerArray[charBinaryArray[i]] += integratedArray[0][0].substring(charIndex-1,charIndex);
                answerArray[charBinaryArray[i]] = answerArray[charBinaryArray[i]].replace('undefined',"");

                if(isClosed){
                    answerArray[charBinaryArray[i]] = answerArray[charBinaryArray[i]].substring(isClosed); 
                }
                isClosed = 0;
            }
        }
    }

    console.log(answerArray);

    // 5. 문자열 비트로의 변환 처리
    let answer = '';

    for(let i in input){
        answer += answerArray[input[i]];
    }

    return answer;
}

console.log(huffman(input));