# Algorithm With JS

## 알고리즘 문제 풀이

> `2021-05-09`

1. programmers > 코딩테스트 연습 > 로또의 최고 순위와 최저 순위 
<br>
<img src="https://user-images.githubusercontent.com/41010744/117563082-76f61880-b0de-11eb-8640-f0bc21fb3f4a.png">
<br>

**출처** : https://programmers.co.kr/learn/courses/30/lessons/77484

> `2021-05-10`

2. programmers > 코딩테스트 연습 > 주어진 숫자 배열에서 3개를 더했을때 소수가 되는 경우의 수 구하기

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