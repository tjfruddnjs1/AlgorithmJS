let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];

function solution(board, moves){
    let answer = 0;
    let answer_slot = [];
    let board_y_index = 0;
    let board_x_index = 0;

    for(element in moves){
        board_y_index = moves[element] - 1;

        while(true){
            if(board_x_index >= board.length) {
                board_x_index = 0;
                break;
            }

            if(board[board_x_index][board_y_index] == 0){
                board_x_index++;
            }else{
                if(answer_slot[answer_slot.length-1] == board[board_x_index][board_y_index]){
                    answer_slot.pop();
                    answer+=2; 
                }else{
                    answer_slot.push(board[board_x_index][board_y_index]);
                }
                
                board[board_x_index][board_y_index] = 0;
                board_x_index = 0;
                break;
            }
        }
    }

    return answer;
}

console.log(solution(board, moves));