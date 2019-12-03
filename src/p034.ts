import { rootCertificates } from "tls";

/*
145は面白い数である. 1! + 4! + 5! = 1 + 24 + 120 = 145となる.

各桁の数の階乗の和が自分自身と一致するような数の和を求めよ.

注: 1! = 1 と 2! = 2 は総和に含めてはならない.
*/

function fill(n: number, c: number): number {
    let sum: number = 0;
    for (let i: number = 0; i < c; i++) {
        sum = sum * 10 + n;
    }
    return sum;
}

function limit(): number {
    const max: number = 100;
    let tmp: number = 0;
    for (let i: number = 0; i < max; i++) {
        tmp = i * factorial(9);
        if (fill(9, i) > tmp) {
            break;
        }
    }
    return tmp;
}

function factorial(n: number): number {
    let rc: number = 1;
    for (let i: number = 1; i <= n; i++) {
        rc *= i;
    }
    return rc;
}

function num2fac(n: number): number {
    let sum: number = 0;
    let m: number = n;
    while (true) {
        let x: number = m % 10;
        sum += factorial(x);
        m = Math.floor(m / 10);
        if (m == 0) break;
    }
    return sum;
}

export function main() {
    let ans: number = 0;
    for (let i: number = 3; i < limit(); i++) {
        let x: number = num2fac(i);
        if (x == i) {
            console.log("The condition meets with " + i.toString());
            ans += x;
        }
    }
    console.log("p034: " + ans.toString());
}