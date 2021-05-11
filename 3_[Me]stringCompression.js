let s = "abcabcabcabcdededededede";

function solution(s) {
    let answer = s.length;
    
    //자를 문자 길이
    let divide_length = 1;
    
    //자를 문자길이 설정 (1~문자열의 절반)
    while(divide_length <= s.length/2){
        //자를 문자 길이 기준 반복 횟수
        let repeat_count = Math.ceil(s.length/divide_length);
        //저장할 배열의 현재 인덱스
        let array_current_index = 0;
        //문자열 내 가리키고 있는 현재 인덱스
        let string_current_index = 0;
        //자른 문자를 담을 배열
        let char_array = [];

        //1. divide_length 크기만큼 문자열을 잘라 char_array배열에 넣기 
        while(repeat_count != 0){
            char_array[array_current_index] = s.substring(string_current_index, string_current_index + divide_length);
            repeat_count--;
            string_current_index += divide_length;
            array_current_index++;
        }

        //연속해서 문자가 동일하게 나타나는지 판단하기 위한 배열
        let equal_string = [];

        //2. char_array 배열에서 현재 인덱스와 다음 인덱스의 값을 비교하여 같다면 1, 다르면 0
        for(let i = 0;i < char_array.length;i++){
            equal_string[i] = 0;
            for(let j = i+1; i<char_array.length;j++){
                if(char_array[i] != char_array[j]) break;
                else{
                    equal_string[i]++;
                }
            }
        }

        //몇개나 동일한 문자가 나오는지 판단하기 위한 변수
        let equal_count = 1;
        let new_array = [];

        //3. equal_string에 저장된 값이 몇개나 연속하는지 판단후 배열에 숫자값으로 변경
        for(let i in equal_string){
            if(equal_string[i]){
                i++;
                equal_count++;
            }else{
                if(equal_count != 1){
                    new_array += (equal_count)+char_array[i];
                    equal_count=1;
                }else{
                    new_array += char_array[i];
                }
            }
        }

        //5. 가장 바깥 while문이 끝날때까지 문자열의 길이가 최소인 것을 answer에 넣는다
        answer = Math.min(new_array.length, answer);
        console.log(answer);

        divide_length++;
    }
    return answer;
}

console.log(solution(s));