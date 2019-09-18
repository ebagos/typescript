/*
d(n) を n の真の約数の和と定義する. (真の約数とは n 以外の約数のことである. )
もし, d(a) = b かつ d(b) = a (a ≠ b のとき) を満たすとき, a と b は友愛数(親和数)であるという.

例えば, 220 の約数は 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 なので d(220) = 284 である.
また, 284 の約数は 1, 2, 4, 71, 142 なので d(284) = 220 である.

それでは10000未満の友愛数の和を求めよ.
*/
function makeTrueDivisorList(num: number): number[] {
    if (num < 1) {
        return [];
    } else if (num == 1 || num == 2 || num == 3) {
        return [1];
    } else {
        let divisorList: number[] = [1];
        for (let i: number = 2; i < Math.floor(num / 2) + 1; i++) {
            if (num % i == 0) {
                divisorList.push(i);
            }
        }
        return divisorList;
    }
}

function isFriend(num: number): boolean {
    let a: number[] = makeTrueDivisorList(num);
    let fa: number = a.reduce((e, p) => {return e + p;});
    if (fa == num) return false;
    let b: number[] = makeTrueDivisorList(fa);
    let fb: number = b.reduce((e, p) => {return e + p;});
    if (fb == num) return true;
    return false;
}

export function main() {
    let sum: number = 0;
    for (let i: number = 1; i < 10000; i++) {
        if (isFriend(i)) {
            sum += i;
        }
    }
    console.log("p021: " + sum.toString());
}