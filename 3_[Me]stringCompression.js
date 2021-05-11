let s = "abcabcabcabcdededededede";

function solution(s) {
    let answer = s.length;
    
    let divide_length = 1;
    
    while(divide_length <= s.length/2){
        let repeat_count = Math.ceil(s.length/divide_length);
        let array_current_index = 0;
        let string_current_index = 0;
        let char_array = [];

        while(repeat_count != 0){
            char_array[array_current_index] = s.substring(string_current_index, string_current_index + divide_length);
            repeat_count--;
            string_current_index += divide_length;
            array_current_index++;
        }

        let equal_string = [];

        for(let i = 0;i < char_array.length;i++){
            equal_string[i] = 0;
            for(let j = i+1; i<char_array.length;j++){
                if(char_array[i] != char_array[j]) break;
                else{
                    equal_string[i]++;
                }
            }
        }

        let equal_count = 1;
        let new_array = [];

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

        answer = Math.min(new_array.length, answer);

        divide_length++;
    }
    return answer;
}

console.log(solution(s));