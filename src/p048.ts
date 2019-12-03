import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/*
次の式は, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 である.

では, 1^1 + 2^2 + 3^3 + ... + 1000^1000 の最後の10桁を求めよ.
*/

// 桁ごとに演算した後の桁あふれを1桁上に引き継ぐ
function normalize(x: number[]): number[] {
    for (let i: number = 0; i < x.length - 1; i++) {
        x[i + 1] += Math.floor(x[i] / 10);
        x[i] %= 10;
    }
    return x;
}

// 足し算
function plus(a: number[], result: number[]) {
    for (let i: number = 0; i < a.length; i++) {
        result[i] += a[i];
    }
    return normalize(result);
}

// べき乗
function power(x: number[], n: number): number[] {
    x[0] = 1;
    for (let th: number = 0; th < n; th++) {
        for (let i: number = 0; i < x.length; i++) {
            x[i] *= n;
        }
        x = normalize(x);
    }
    return x;
}

function printlog(val: number[]) {
    let disp: string = "";
    for (let i: number = val.length - 2; i >= 0; i--) {
        disp += val[i].toString();
    }
    console.log("p048: " + disp);
}

export function main() {
    const MAXKETA: number = 11;
    const MAXREP: number = 1000;

    let result: number[] = [];
    for (let i: number = 0; i < MAXKETA; i++) {
        result[i] = 0;
    }
    for (let i: number = 1; i <= MAXREP; i++) {
        let val: number[] = [];
        for (let j: number = 0; j < MAXKETA; j++) {
            val[j] = 0;
        }
        val = power(val, i);
        result = plus(val, result);
    }
    printlog(result);
}