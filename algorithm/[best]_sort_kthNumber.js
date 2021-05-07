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
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}

console.log(solution(array, array2D));
