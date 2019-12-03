/*
順列とはモノの順番付きの並びのことである. たとえば, 3124は数 1, 2, 3, 4 の一つの順列である. すべての順列を数の大小でまたは辞書式に並べたものを辞書順と呼ぶ. 0と1と2の順列を辞書順に並べると 012 021 102 120 201 210 になる.

0,1,2,3,4,5,6,7,8,9からなる順列を辞書式に並べたときの100万番目はいくつか?
*/
function factorial(n: number): number {
    if (n == 0) {
        return 1;
    }
    let ans: number = 1;
    for (let i: number = 1; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

export function main() {
    const TARGET: number = 1000000;
    let target: number = TARGET - 1;
    let ans: string = "";
    const org: string = "0 1 2 3 4 5 6 7 8 9";
    let sl: string[] = org.split(" ");
    for (let i: number = 9; i >= 0; i--) {
        let x: number = factorial(i);
        let n: string = sl[Math.floor(target / x)];
        for (let j: number = Math.floor(target / x); j < sl.length - 1; j++) {
            sl[j] = sl[j + 1];
        }
        target %= x;
        ans += n.toString();
    }
    console.log("p024: " + ans);
}