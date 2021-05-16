let w = 100000000;
let h = 4;

function solution(w, h) {
    let sum = 0;
    let temp = 0;
    let side = h/w;

    for (let i = 0; i < w; i++) {
        temp = side * i;
        sum += Math.floor(temp);
    }
    
    return sum * 2;
}

console.log(solution(w,h));
console.log(solution(h,w));

console.log(1/99);