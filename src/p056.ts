/*
Googol ( 10^100 )は非常に大きな数である: 1の後に0が100個続く. 100^100は想像を絶する. 1の後に0が200回続く. その大きさにも関わらず, 両者とも数字和 ( 桁の和 ) は1である.

a, b < 100 について自然数 ab を考える.

数字和の最大値を答えよ.
*/
const MAX: number = 202;

function makeArray(n: number): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < MAX; i++) {
        result[i] = n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

function power(x: number, n: number): number[] {
    let result: number[] = makeArray(x);
    for (let i: number = 1; i < n; i++) {
        for (let j: number = 0; j < MAX; j++) {
            result[j] *= x;
        }
        for (let j: number = 0; j < MAX - 1; j++) {
            result[j + 1] += Math.floor(result[j] / 10);
            result[j] %= 10;
        }
    }
    return result;
}

export function main() {
    let sum: number = 0;
    for (let a: number = 2; a < 100; a++) {
        for (let b: number = 2; b < 100; b++) {
            let rc: number[] = power(a, b);
            let tmp: number = rc.reduce((x, y) => {return x + y});
            if (sum < tmp) {
                sum = tmp;
            }
        }
    }
    console.log("p056: " + sum.toString());
}
