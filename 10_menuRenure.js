let orders = ["XYZ", "XWY", "WXA"];
let course = [2,3,4];

function solution(orders, course) {
    let answer = [];
    let orderSplit = [];

    for(let i in orders){
        orderSplit.push(orders[i].split(''));
    }

    for(let i in course){
        let mapOrder = new Map();
        let combinationOrder = [];

        for(let j in orderSplit){
            combinationOrder += combination(orderSplit[j], course[i]) + ',';
        }

        let word = combinationOrder.split(',');

        word.map(v => {
            v = stringSort(v);
            if(!mapOrder.has(v)) {
                mapOrder.set(v, 0);
            }else {
                mapOrder.set(v , mapOrder.get(v)+1);
            }
        })

        mapOrder.delete('');

        console.log(mapOrder);

        let max = [...mapOrder.entries()].reduce((a,b) => a[1] >= b[1] ? a:b,0)[1];

        for(let [key, value] of mapOrder.entries()) {
            if(value === max && value >= 1) answer.push(key);
        }
    }

    answer.sort();
    
    return answer;
}

function stringSort(s){
    return s.split('').sort().join('');
}

function combination(arr, m){ 
    const combination = [];
    const picked = [];
    
    function find(picked){
        if(picked.length === m){
            const rst = [];
            for(let i of picked){
                rst.push(arr[i]);
            }
            combination.push(rst.join(''));
            return;
        }else{
            //picked 존재시 길이보다 1 큰수를, 없다면 0을 start로 선언
            let start = picked.length ? picked[picked.length-1] + 1 : 0;

            for(let i = start;i<arr.length;i++){
                // 첫 원소일 때, arr[i]와 arr[i-1]이 같지 않을 때
                if(i === 0 || arr[i] !== arr[i-1]){
                    picked.push(i);
                    find(picked);
                    picked.pop();
                }
            }
        }
    }
    find(picked);
    return combination;
}

console.log(solution(orders,course));