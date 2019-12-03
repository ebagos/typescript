/*
最初の10個の自然数について, その二乗の和は, 1^2 + 2^2 + ... + 10^2 = 385

最初の10個の自然数について, その和の二乗は, (1 + 2 + ... + 10)^2 = 3025

これらの数の差は 3025 - 385 = 2640 となる.

同様にして, 最初の100個の自然数について二乗の和と和の二乗の差を求めよ.
*/
import range from './range';

function sumpow(n: number): number {
    let x: number = (1 + n) * n / 2;
    return Math.pow(x, 2);
}

function powsum(n: number): number {
    let sum: number = 0;
    for (let i: number = 1; i <= n; i++) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

export function main() {
    console.log("p006: " + (sumpow(100) - powsum(100)).toString());
}

const p006 = () => {
    const a = range(1, 100).map(x => x * x).reduce((y, z) => y + z);
    const b = range(1, 100).reduce((x, y) => x + y);
    return b * b - a;
}

console.log(p006());