/*
フィボナッチ数列は以下の漸化式で定義される:

Fn = Fn-1 + Fn-2, ただし F1 = 1, F2 = 1.

最初の12項は以下である.

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144

12番目の項, F12が3桁になる最初の項である.

1000桁になる最初の項の番号を答えよ.
*/
export function main() {
    const maxCol: number = 1000;
    let f1: number[] = [];
    let f2: number[] = [];
    let f3: number[] = [];
    for (let i: number = 0; i < maxCol + 1; i++) {
        f1[i] = f2[i] = f3[i] = 0;
    }
    f1[0] = f2[0] = 1;
    let num: number = 2;

    while(true) {
        for (let i: number = 0; i <= maxCol; i++) {
            f3[i] = f1[i] + f2[i];
        }
        num++;
        for (let i: number = 0; i < maxCol; i++) {
            let tmp: number = Math.floor(f3[i] / 10);
            f3[i] %= 10;
            f3[i + 1] += tmp;

            f1[i] = f2[i];
            f2[i] = f3[i];
        }
        if (f3[999] != 0) break;
    }
    console.log("p025: " + num.toString());
}