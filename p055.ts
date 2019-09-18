/*


47とその反転を足し合わせると, 47 + 74 = 121となり, 回文数になる.

全ての数が素早く回文数になるわけではない. 349を考えよう,

```
349 + 943 = 1292,
1292 + 2921 = 4213
4213 + 3124 = 7337
'''

349は, 3回の操作を経て回文数になる.

まだ証明はされていないが, 196のようないくつかの数字は回文数にならないと考えられている.

反転したものを足すという操作を経ても回文数にならないものをLychrel数と呼ぶ.

先のような数の理論的な性質により, またこの問題の目的のために, Lychrel数で無いと証明されていない数はLychrel数だと仮定する.

更に, 10000未満の数については，常に以下のどちらか一方が成り立つと仮定してよい.

50回未満の操作で回文数になる
まだ誰も回文数まで到達していない

実際, 10677が50回以上の操作を必要とする最初の数である: 4668731596684224866951378664 (53回の操作で28桁のこの回文数になる).

驚くべきことに, 回文数かつLychrel数であるものが存在する. 最初の数は4994である.

10000未満のLychrel数の個数を答えよ.
*/
function lychel(num: number, limit: number): number {
    let count: number = 0;
    for (let n: number = 1; n < num; n++) {
        let n0: number = n;
        for (let l: number = 0; l < limit; l++) {
            let n1: number = parseInt(n0.toString().split('').reverse().join(''));
            n1 += n0;
            let n2: number = parseInt(n1.toString().split('').reverse().join(''));
            if (n1 == n2) {
                break;
            }
            n0 = n1;
            if (l == limit - 1)
                count++;
            }
    }
    return count;
}

export function main() {
    console.log("p055: " + lychel(10000, 50).toString());
}