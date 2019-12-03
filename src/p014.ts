import range from "./range";

/*
正の整数に以下の式で繰り返し生成する数列を定義する.

n → n/2 (n が偶数)

n → 3n + 1 (n が奇数)

13からはじめるとこの数列は以下のようになる. 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

13から1まで10個の項になる. この数列はどのような数字からはじめても最終的には 1 になると考えられているが, まだそのことは証明されていない(コラッツ問題)

さて, 100万未満の数字の中でどの数字からはじめれば最長の数列を生成するか.

注意: 数列の途中で100万以上になってもよい
*/
const MAX: number = 1000000;
let array: number[] = [];

function collatz(n: number): number {
    let count: number = 1;
    while (n > 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = n * 3 + 1;
        }
        count++;
    }
    return count;
}

function sub1() {
    let max: number = 0;
    let key: number = 0;
    for (let i: number = 0; i < MAX; i++) {
        let rc = collatz(i);
        if (max < rc) {
            max = rc;
            key = i;
        }
    }
    console.log("p014: " + key.toString() + " => " + max.toString());
}

function next(n: number): number {
    let rc: number = 0;
    if (n % 2 == 0) {
        rc = n / 2;
    } else {
        rc = n * 3 + 1;
    }
    return rc;
}

function add(dict: {[index: number]: number}, n1: number): {[index: number]: number} {
    let n2: number = next(n1);
    let ok: number = dict[n2];
    if (ok == undefined) {
        dict = add(dict, n2);
    }
    dict[n1] = dict[n2] + 1;
    return dict;
}

function sub2() {
    let max: number = 0;
    let key: number = 0;
    let dict: {[index: number]: number} = {};
    dict[1] = 1;
    for (let i: number = 2; i < MAX; i++) {
        let ok: number = dict[i];
        if (ok == undefined) {
            dict = add(dict, i);
            if (dict[i] > max) {
                max = dict[i];
                key = i;
            }
        }
    }
    console.log("p014: " + key.toString() + " => " + max.toString());
}

export function main() {
    sub1();
    sub2();
}

const clz = (n: number, rc: number): number => {
    if (n === 1) {
        return rc;
    }
    if (n % 2 === 0) {
        return clz(n / 2, rc + 1);
    } else {
        return clz(n * 3 + 1, rc + 1);
    }
}

const maxIndex = (array: number[]): number => {
    let index: number = 0;
    let rc: number = 1;
    for (let i = 0; i < array.length; i++) {
        if (rc < array[i]) {
            rc = array[i];
            index = i;
        }
    }
    return index + 1;
}

const p014_slow = () => {
    const r = range(1, 1000000-1).map(x => clz(x, 0));
    console.log(r);
    return maxIndex(r);
}

const p014 = (): void => {
    let max: number = 0;
    let index: number = 0;
    let dict: {[index: number]: number} = {};
    dict[1] = 1;
    const source: number[] = range(1, MAX);
    const array: number[] = source.map(i => {
        if (dict[i] == undefined) {
            dict = add(dict, i);
        }
        if (dict[i] > max) {
            max = dict[i];
            index = i;
        }
        return dict[i];
    });
//    const maxValue = Math.max(...array);  // stack overflow
    console.log(index, max);
}

console.log(p014());
