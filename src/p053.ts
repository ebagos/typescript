/*
12345から3つ選ぶ選び方は10通りである.

123, 124, 125, 134, 135, 145, 234, 235, 245, 345.

組み合わせでは, 以下の記法を用いてこのことを表す: 5C3 = 10.

一般に, r ≤ n について nCr = n!/(r!(n-r)!) である. ここで, n! = n×(n−1)×...×3×2×1, 0! = 1 と階乗を定義する.

n = 23 になるまで, これらの値が100万を超えることはない: 23C10 = 1144066.

1 ≤ n ≤ 100 について, 100万を超える nCr は何通りあるか?
*/
function factorial(n: number): number {
    let result: number = 1;
    for (let i: number = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

export function main() {
    let result: number = 0;
    for (let n: number = 1; n <= 100; n++) {
        for (let r: number = 1; r <= n; r++) {
            let x1: number = factorial(n);
            let x2: number = factorial(r);
            let x3: number = factorial(n - r);
            let x: number = x1 / (x2 * x3);
            if (x > 1000000) {
                result++;
            }
        }
    }
    console.log("p053: " + result.toString());
}