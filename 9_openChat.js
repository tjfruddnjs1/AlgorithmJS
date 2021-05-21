let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

function solution(record) {
    let answer = [];
    let memberList = new Map();

    for(let index in record){

        let order = record[index].split(' ')[0];
        let memberId = record[index].split(' ')[1];
        let memberNickname = record[index].split(' ')[2];

        switch(order){
            case 'Enter' :
                memberList.set(memberId, memberNickname);
                answer.push(memberId+"님이 들어왔습니다.");

                break;
            case 'Leave' :
                answer.push(memberId+"님이 나갔습니다.");
                break;
            case 'Change' :
                memberList.set(memberId, memberNickname);
                break;
        }
    }


    for(let answerIndex in answer){
        let userId = answer[answerIndex].split('님')[0];
        answer[answerIndex] = answer[answerIndex].replace(userId, memberList.get(userId));
    }

    return answer;
}

console.log(solution(record));