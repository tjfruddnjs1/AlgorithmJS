let answers = [1,3,2,4,2,3,4,1,2,3];

function solution(answers) {
    let answer = [];
    let person1 = [];
    let person2 = [];
    let person3 = [];

    let person1_index = [1,2,3,4,5];
    let person2_index = [2,1,2,3,2,4,2,5];
    let person3_index = [3,3,1,1,2,2,4,4,5,5];

    while(answers.length > person1.length){
        for(let i in person1_index){
            if(answers.length < person1.length+1) break;
            person1.push(person1_index[i]);
            i = 0;
        }
    }

    while(answers.length > person2.length){
        for(let i in person2_index){
            if(answers.length < person2.length+1) break;
            person2.push(person2_index[i]);
            i = 0;
        }
    }

    while(answers.length > person3.length){
        for(let i in person3_index){
            if(answers.length < person3.length+1) break;
            person3.push(person3_index[i]);
            i = 0;
        }
    }

    let answer_1 = 0;
    let answer_2 = 0;
    let answer_3 = 0; 

    for(let i in answers){
        if(person1[i] == answers[i]) answer_1 ++;
        if(person2[i] == answers[i]) answer_2 ++;
        if(person3[i] == answers[i]) answer_3 ++;
    }

    let max = Math.max(answer_1, answer_2, answer_3);
    
    if(max == answer_1) answer.push(1);
    if(max == answer_2) answer.push(2);
    if(max == answer_3) answer.push(3);
    
    return answer;
}

console.log(solution(answers));