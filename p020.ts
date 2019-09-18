/*
n × (n - 1) × ... × 3 × 2 × 1 を n! と表す.
例えば, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800 となる.
この数の各桁の合計は 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27 である.
では, 100! の各桁の数字の和を求めよ.
*/

export function main() {
    const MLEN: number = 200;
    let num: number[] = [];
    for (let i: number = 0; i < MLEN; i++) {
        num[i] = 0;
    }
    num[0] = 1;
    for (let i: number = 2; i <= 100; i++) {
        for (let j:number = 0; j < MLEN; j++) {
            num[j] *= i;
        }
        for (let j:number = 0; j < MLEN - 1; j++) {
            num[j+1] += Math.floor(num[j] / 10);
            num[j] %= 10;
        }
    }
    let sum: number = num.reduce((e, p) => {return e+p;});
    console.log("p020: " + sum.toString());
}