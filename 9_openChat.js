let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

function solution(record) {
    let answer = [];
    let memberList = new Map();

    for(let index in record){

        let splitRecord = record[index].split(' ');

        switch(splitRecord[0]){
            case 'Enter' :
                memberList.set(splitRecord[1], splitRecord[2]);
                answer.push(splitRecord[1]+"님이 들어왔습니다.");
                break;
            case 'Leave' :
                answer.push(splitRecord[1]+"님이 나갔습니다.");
                break;
            case 'Change' :
                memberList.set(splitRecord[1], splitRecord[2]);
                break;
        }
    }

    console.log(answer);

    for(let answerIndex in answer){
        let userId = answer[answerIndex].split('님')[0];
        answer[answerIndex] = answer[answerIndex].replace(userId, memberList.get(userId));
    }

    return answer;
}

console.log(solution(record));