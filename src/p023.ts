/*
完全数とは, その数の真の約数の和がそれ自身と一致する数のことである. たとえば, 28の真の約数の和は, 1 + 2 + 4 + 7 + 14 = 28 であるので, 28は完全数である.

真の約数の和がその数よりも少ないものを不足数といい, 真の約数の和がその数よりも大きいものを過剰数と呼ぶ.

12は, 1 + 2 + 3 + 4 + 6 = 16 となるので, 最小の過剰数である. よって2つの過剰数の和で書ける最少の数は24である. 数学的な解析により, 28123より大きい任意の整数は2つの過剰数の和で書けることが知られている. 2つの過剰数の和で表せない最大の数がこの上限よりも小さいことは分かっているのだが, この上限を減らすことが出来ていない.

2つの過剰数の和で書き表せない正の整数の総和を求めよ.
*/
const MAX: number = 28123;

function makeDivisorList(num: number): number[] {
    let rc: number[] = makeTrueDivisorList(num);
    rc.push(num);
    return rc;
}

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

function isOver(num: number): boolean {
    let rc: boolean = false;
    let a: number[] = makeTrueDivisorList(num);
    let fa: number = a.reduce((e, p) => {return e + p;});
    if (fa > num) {
        rc = true;
    } else {
        rc = false;
    }
    return rc;
}

function getSumOfDivisors(num: number): number {
    let sum: number = 0;
    for (let j: number = Math.floor(num / 2); j > 0; j--) {
        if (num % j == 0) {
            sum += j;
        }
    }
    return sum;
}

export function main() {
    let abundant: number[] = [];
    let sumList: {[index: number]: boolean} = {};
    let sum: number = 0;

    for (let i: number = 1; i <= MAX; i++) {
        if (getSumOfDivisors(i) > i) {
            abundant.push(i);
        }
    }
    for (let j: number = 0; j < abundant.length; j++) {
        for (let k: number = 0; k < abundant.length; k++) {
            let tempNum: number = abundant[j] + abundant[k];
            if (tempNum < MAX) {
                sumList[tempNum] = true;
            }
        }
    }
    for (let i: number = 0; i < MAX; i++) {
        if (sumList[i] == undefined) {
            sum += i;
        }
    }
    console.log("p023: " + sum.toString());
}

export function mainOrg() {
    let ar: number[] = [];
    let dict: {[index: number]: boolean} = {};
    for (let i: number = 1; i <= MAX; i++) {
        let rc: boolean = isOver(i);
        dict[i] = rc;
        if (rc) {
            ar.push(i);
        }
    }
    for (let x: number = 0; x < ar.length; x++) {
        for (let y: number = 0; y < ar.length; y++) {
            dict[ar[x] + ar[y]] = true;
        }
    }
    let sum: number = 0;
    for (let i: number = 1; i <= MAX; i++) {
        if (dict[i] == false) {
            sum += i;
        }
    }
    console.log("p023: " + sum.toString());
}