/*
驚くべきことに, 各桁を4乗した数の和が元の数と一致する数は3つしかない.

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4

ただし, 1=1^4は含まないものとする. この数たちの和は 1634 + 8208 + 9474 = 19316 である.

各桁を5乗した数の和が元の数と一致するような数の総和を求めよ.
*/
function fill(n: number, c: number): number {
    let sum: number = 0;
    for (let i: number = 0; i < c; i++) {
        sum = sum * 10 + n;
    }
    return sum;
}

function limit(x: number): number {
    const max: number = 100;
    let tmp: number = 0;
    for (let i: number = 0; i < max; i++) {
        tmp = i * (9 ** x);
        if (fill(9, i) > tmp) {
            break;
        }
    }
    return tmp;
}

function num2pow(n: number, c: number): number {
    let sum: number = 0;
    let m: number = n;
    while (true) {
        let x: number = m % 10;
        sum += (x ** c);
        m = Math.floor(m / 10);
        if (m == 0) break;
    }
    return sum;
}

export function main() {
    const POWER: number = 5;
    let ans: number = 0;
    for (let i: number = 2; i < limit(POWER); i++) {
        let x: number = num2pow(i, POWER);
        if (x == i) {
            console.log("The condition meets with " + i.toString());
            ans += x;
        }
    }
    console.log("p030: " + ans.toString());
}