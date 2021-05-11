# Algorithm With JS

## VS Code 단축키
- ctrl + shift + L : 변경하려는 단어 선택후 사용시 선택 단어와 같은 단어 모두 선택

## 알고리즘 문제 풀이

> `2021-05-09`

- programmers > 코딩테스트 연습 > 로또의 최고 순위와 최저 순위 
<br>
<img src="https://user-images.githubusercontent.com/41010744/117563082-76f61880-b0de-11eb-8640-f0bc21fb3f4a.png">
<br>

**출처** : https://programmers.co.kr/learn/courses/30/lessons/77484

> `2021-05-10`

- programmers > 코딩테스트 연습 > 주어진 숫자 배열에서 3개를 더했을때 소수가 되는 경우의 수 구하기

> 내가 생각한 풀이
1. 3개의 합이 될수 있는 모든 경우의 수 구하기(중복제외, Combination) → [2_combination.js](https://github.com/tjfruddnjs1/AlgorithmJS/blob/main/2_combination.js)
2. 경우의 수가 담긴 배열에서의 각 원소합 구하기
3. 원소합 배열에서 소수인지 판별하여 소수라면 answer++

> 알게된 함수
1. reduce((acc, cur, idx) => //처리 내용 , //초기값)
- 빈 요소를 제외하고 배열 내의 존재하는 각 요소에 대해 callback 함수를 한 번씩 실행하는 함수
- **accumlator** : 콜백의 반환값을 누적 , 콜백의 이전 반환값을 저장
- **currentValue** : 처리할 현재 요소
- **currentIndex** : 처리할 현재 요소의 인덱스
- **array** : 함수를 호출한 배열
- **initialValue** : 초기값

**출처** : https://programmers.co.kr/learn/courses/30/lessons/12977

> `2021-05-11`

> 정규표현식, /regex?/flag
- 실습 사이트 : https://regexr.com/5ml92
- **총 4가지 그룹으로 문법을 정리**

1. Groups and ranges
- **|** : 또는
- **()** : 그룹
- **(?:)** : 찾지만 그룹으로 기억하지 않음
- **[]** : 대괄호 내의 어떤 문자든
> ex. [a-zA-Z0-9]/gm : a~zA~Z0~9 까지의 문자 어느 것이든
- **[^]** : 대괄호 내에 존재하는 문자를 제외한 문자 찾을 때

2. 수량에 관련한 Quantifiers
- **?** : 특정 문자 이후 지정시 , 없거나 있거나의 경우
- * : 특정 문자 이후 지정시 , 없거나 있거나 많거나의 경우
- **+** : 특정 문자 이후 지정시 , 하나 있거나 많거나의 경우
- **{n}** : 특정 문자 이후 지정시 , 특정 문자가 n번 있는 경우
- **{min, max}** : 특정 문자 이후 지정시 , 특정 문자가 최소 min개에서 최대 max개까지 있는 경우 

3. Boundary Type
- **\b** : 해당 type을 적을 경우 해당 문자가 어디서 나타나는 지를 결정 가능
> ex. /Ya\b/gm : Ya가 단어 뒤에 있는 경우를 찾아 반환 , /\bYa/gm : Ya가 단어 처음에 있는 경우를 찾아 반환
- **\B** : 대문자로 작성시 소문자로 사용됬을 때의 경우가 아닌 경우를 반환
- **^** : 문장에서 시작되는 단어 찾기
- **$** : 문장의 끝에 있는 단어 찾기

4. Character Classes
- **\** : 특수 문자가 아닌 문자를 찾기 위한
> ex. \. : 문장 전체를 의미하는 .이 아닌 문자 .을 찾기 위함
> ex. \[\] : 특수 문자 []를 찾기 위한
- **.** : 문장 전체 (줄바꿈 문자 제외)
- **\d** : 숫자를 전부 찾음
- **\D** : 숫자가 아닌 전부
- **\w** : 문자를 전부 찾음
- **\W** : 문자가 아닌 전부
- **\s** : 공백을 찾을 수 있음
- **\S** : 띄어쓰기가 아닌 전부

> programmers > 코딩테스트 연습 > 문자열 압축(2020 KAKAO BLIND RECRUITMENT)

> 내가 생각한 풀이

- 변수 지정 및 초기 알고리즘 주석 설명
```js
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

        //연속해서 문자가 동일하게 나타나는지 판단하기 위한 배열
        let equal_string = [];

        //2. char_array 배열에서 현재 인덱스와 다음 인덱스의 값을 비교하여 같다면 1, 다르면 0

        //몇개나 동일한 문자가 나오는지 판단하기 위한 변수
        let equal_count = 1;
        let new_array = [];

        //3. equal_string에 저장된 값이 몇개나 연속하는지 판단후 배열에 숫자값으로 변경

         //4. 가장 바깥 while문이 끝날때까지 문자열의 길이가 최소인 것을 answer에 넣는다

        divide_length++;
    }
```
1. divide_length 크기만큼 문자열을 잘라 char_array배열에 넣기 
```js
while(repeat_count != 0){
            char_array[array_current_index] = s.substring(string_current_index, string_current_index + divide_length);
            repeat_count--;
            string_current_index += divide_length;
            array_current_index++;
        }
```
- char_array 배열에 **subString(초기 인덱스, 마지막 인덱스)** 함수를 통해 값 대입

2. char_array 배열에서 현재 인덱스와 다음 인덱스의 값을 비교하여 같다면 1, 다르면 0 

```js
for(let i = 0;i < char_array.length;i++){
        equal_string[i] = 0;
        for(let j = i+1; i<char_array.length;j++){
            if(char_array[i] != char_array[j]) break;
            else{
                equal_string[i]++;
            }
        }
    }
```

- 배열의 다음요소와 같은 요소인지 확인하기 위한 equal_string 배열

3. equal_string에 저장된 값이 몇개나 연속하는지 판단후 배열에 숫자값으로 변경

```js
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
```

- equal_string 배열의 값을 통해 일치하는 문자열의 갯수를 포함한 문자로 치환

4. 가장 바깥 while문이 끝날때까지 문자열의 길이가 최소인 것을 answer에 넣는다

```js
    answer = Math.min(new_array.length, answer);
```

> 알게된 함수
1. slice, splice
- slice(start, end) : **배열**의 start인덱스 부터 end 인덱스 전(포함X)까지의 결과 반환
- **기존 배열에서 새로운 배열 복사**
- splice(start, deleteCount) : **배열**의 start인덱스부터 deleteCount갯수의 요소를 삭제
- **배열의 기존 요소를 변경**

2. subString
- subString(start, end) : **문자열**의 start 인덱스부터 end인덱스(포함O)까지를 반환

**출처** : https://programmers.co.kr/learn/courses/30/lessons/60057