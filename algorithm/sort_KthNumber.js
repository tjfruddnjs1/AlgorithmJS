let array = new Array(7);

array = [1,5,2,6,3,7,4];

function create2DArray(rows, columns){
    let arr = new Array(rows);
    for(let i=0;i<rows;i++){
        arr[i] = new Array(columns);
    }

    return arr;
}

let array2D = create2DArray(3,3);

array2D = [[2,5,3],[4,4,1],[1,7,3]];

function solution(array, commands) {
    let answer = [];
    let arrayForSlice = [];

    for(let i = 0; i < commands.length; i++){
        arrayForSlice = array.slice(commands[i][0]-1, commands[i][1]);
        arrayForSlice.sort(function(a,b){
            return a-b;
        });
        answer.push(arrayForSlice[commands[i][2]-1]);
    }

    return answer;
}