/*
左右どちらから読んでも同じ値になる数を回文数という. 2桁の数の積で表される回文数のうち, 最大のものは 9009 = 91 × 99 である.

では, 3桁の数の積で表される回文数の最大値を求めよ.
*/

export function main() {
    let ans: number = 0;
    for (let i: number = 999; i > 99; i--) {
        for (let j: number = 999; j > i; j--) {
            let x: number = i * j;
            if (x.toString() == kaibun(x)) {
                if (ans < x) {
                    ans = x;
                }
            }
        }
    }
    console.log("p004: " + ans.toString());
}

// 整数と実数との区別がないので数値演算で解を出すのは難しい
function kaibun(n: number): string {
    return n.toString().split("").reverse().join("");
}
