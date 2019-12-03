/*

各桁の2乗を足し合わせて新たな数を作ることを, 同じ数が現れるまで繰り返す.

例えば

　　44 → 32 → 13 → 10 → 1 → 1
　　85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

のような列である. どちらも1か89で無限ループに陥っている. 驚くことに, どの数から始めても最終的に1か89に到達する.

では, 10,000,000より小さい数で89に到達する数はいくつあるか.
*/

function ketaSquare(n: number): number {
    let result: number = 0;
    while (n != 0) {
        result += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return result;
}

export function main() {
    let count: number = 0;
    const max: number = 9 * 9 * 7 + 1   // 9,999,999に1を足しておく
    let memo: number[] = [];
    for (let i: number = 0; i < max; i++) {
        memo[i] = -1;
    }
    memo[1] = 0;
    memo[89] = 1;
    for (let i: number = 2; i < 10000000; i++) {
        let n: number = i;
        while (true) {
            n = ketaSquare(n);
            if (memo[n] != -1) {
                break;
            }
        }
        if (memo[n] == 1) {
            count++;
            if (i < max) {
                memo[i] = 1;
            }
        } else if (i < max) {
            memo[i] = 0;
        }
    }
    console.log("p092: " + count.toString());
}