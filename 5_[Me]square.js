let w = 171717178;
let h = 123532132;

function solution(w, h) {
    let sum = 0;
    let temp = 0;
    let side = h/w;

    console.log(w/h);

    for (let i = 0; i < w; i++) {
        temp = side * i;
        sum += Math.floor(temp);
    }
    
    return sum * 2;
}

console.log(solution(w,h));