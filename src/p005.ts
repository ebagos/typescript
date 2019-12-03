/*
2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり, そのような数字の中では最小の値である.

では, 1 から 20 までの整数全てで割り切れる数字の中で最小の正の数はいくらになるか.
*/
import range from './range';

export function main() {
    let ans: number = 1;
    for (let i: number = 1; i < 21; i++) {
        ans = lcm(ans, i);
    }
    console.log("p005: " + ans.toString());
}

function gcd(a: number, b: number): number {
    while (b != 0) {
        let r: number = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a: number, b: number): number {
    if (a != 0 && b != 0) {
        return (a * b) / gcd(a, b);
    }
    return 0;
}

const p005 = (n: number) => {
    let ans = 1;
    const a = range(1, n).map(x => ans = lcm(x, ans));
    return a;
}

export default p005;
