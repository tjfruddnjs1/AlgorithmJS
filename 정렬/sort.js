//기본 정렬
const basicSort = [2,1,3];

console.log(basicSort.sort());

//문자열 정렬
const stringSort = ['banana','apple','orange'];

console.log(stringSort.sort());

//잘못된 숫자 정렬 예시
const wrongNumberSort = [2,1,3,10];

console.log(wrongNumberSort.sort());

//숫자 오름차순 정렬
const numberSort = [2,1,3,10];

numberSort.sort(function(a,b){
    if(a < b) return -1;
    if(a > b) return 1;
    if(a === b) return 0;
});

console.log(numberSort);

//숫자 오름차순 정렬2
const numberSort2 = [2,1,3,10];

numberSort2.sort(function(a,b){
    return a-b;
});

console.log(numberSort2);

//문자열 오름차순 정렬
const stringASC = ['banana','b','boy'];

console.log(stringASC.sort());

//문자열 내림차순 정렬
const stringDESC = ['banana', 'b', 'boy'];

stringDESC.sort(function(a, b) {
  if(a < b) return 1;
  if(a > b) return -1;
  if(a === b) return 0;
});

console.log(stringDESC);

//문자열 오름차순 정렬(대소문자 구분없이)

const noPartitionASC = ['banana', 'b', 'Boy'];

noPartitionASC.sort(function(a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  
  if(upperCaseA > upperCaseB) return 1;
  if(upperCaseA < upperCaseB) return -1;
  if(upperCaseA === upperCaseB) return 0;
});

console.log(noPartitionASC);

// 문자열 내림차순 정렬(대소문자 구분없이)

const noPartitionDESC = ['banana', 'b', 'Boy'];

noPartitionDESC.sort(function(a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();
  
  if(upperCaseA > upperCaseB) return 1;
  if(upperCaseA < upperCaseB) return -1;
  if(upperCaseA === upperCaseB) return 0;
});

console.log(noPartitionDESC);

const objectSort = [
    {name: 'banana', price: 3000}, 
    {name: 'apple', price: 1000},
    {name: 'orange', price: 500}
];

objectSort.sort(function(a, b) {
  return a.price - b.price;
});

console.log(objectSort);