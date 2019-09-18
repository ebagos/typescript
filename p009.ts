/*
ピタゴラス数(ピタゴラスの定理を満たす自然数)とは a < b < c で以下の式を満たす数の組である.

a^2 + b^2 = c^2

例えば, 3^2 + 4^2 = 9 + 16 = 25 = 5^2 である.

a + b + c = 1000 となるピタゴラスの三つ組が一つだけ存在する.
これらの積 abc を計算しなさい.
*/

export function main() {
    for (let b: number = 2; b < 500; b++) {
        for (let a: number = 1; a < b; a++) {
            let c: number = 1000 - a - b;
            let bb: number = b;
            let cc: number = c;
            if (c < b) {
                bb = c;
                cc = b;
            }
            if (cc * cc - bb * bb - a * a == 0) {
                console.log("p009: " + a.toString() + ", " + bb.toString() + ", " + cc.toString());
                console.log("p009: " + (a * bb * cc).toString())
                return;
            }
        }
    }
}