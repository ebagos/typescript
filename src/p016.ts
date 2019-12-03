/*
2^15 = 32768 であり, 各位の数字の和は 3 + 2 + 7 + 6 + 8 = 26 となる.
同様にして, 2^1000 の各位の数字の和を求めよ.
*/
import range from "./range";

export function main() {
    const max: number = 500;
    let num = range(0, max - 1);//: number[] = [];
    for (let i: number = 0; i < max; i++) {
        num[i] = 0;
    }
    num[0] = 1;
    for (let i: number = 1; i <= 1000; i++) {
        num = num.map(e => e * 2);
/*
        for (let j: number = 0; j < max; j++) {
            num[j] *= 2;
        }
*/
        for (let j: number = 0; j < max - 1; j++) {
            num[j + 1] += Math.floor(num[j] / 10);
            num[j] %= 10;
        }
    }
    let sum: number = num.reduce(function(prev, current: number) {
        return prev + current;
    });
    console.log("p016: " + sum.toString());
}