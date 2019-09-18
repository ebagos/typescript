import { sign } from "crypto";

/*
125874を2倍すると251748となる. これは元の数125874と順番は違うが同じ数を含む.

2x, 3x, 4x, 5x, 6x が x と同じ数を含むような最小の正整数 x を求めよ.
*/

function makeReverseArray(n: number): number[] {
    let a: number[] = [];
    while (n != 0) {
        a.push(n % 10);
        n = Math.floor(n / 10);
    }
    return a;
}

function check(n: number, m: number): boolean {
    let s1: number[] = makeReverseArray(n);
    let s2: number[] = makeReverseArray(m);
    s1 = s1.sort();
    s2 = s2.sort();
    if (s1.length != s2.length) {
        return false;
    }
    for (let i: number = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            return false;
        }
    }
    return true;
}

export function main() {
    let n: number = 1;
    while (!(check(n, n * 2) && check(n, n * 3) && check(n, n * 4) && check(n, n * 5) && check(n, n * 6))) {
        n++;
    }
    console.log("p052: " + n.toString());
}