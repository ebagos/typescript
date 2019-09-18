/*
三角数の数列は自然数の和で表わされ, 7番目の三角数は 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 である. 三角数の最初の10項は:
1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
となる.
最初の7項について, その約数を列挙すると, 以下のとおり.
 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
これから, 7番目の三角数である28は, 5個より多く約数をもつ最初の三角数であることが分かる.
では, 500個より多く約数をもつ最初の三角数はいくつか.
*/

function trinum(num: number): number {
    let result: number = 0;
    for (let i: number = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

function makePrimeList(num: number): number[] {
    let result: number[] = [];
    let primeList: number[] = [];
    if (num < 2) {
        return result;
    }
    for (let i: number = 0; i <= num; i++) {
        primeList[i] = i;
    }
    primeList[1] = 0;
    let numSqrt: number = Math.floor(Math.sqrt(num));
    for (let i: number = 0; i < primeList.length; i++) {
        let prime: number = primeList[i];
        if (prime == 0) {
            continue;
        }
        if (prime > numSqrt) {
            break;
        }
        for (let nonPrime: number = prime * 2; nonPrime < num + 1; nonPrime += prime) {
            primeList[nonPrime] = 0;
        }
    }
    for (let i: number = 0; i < primeList.length; i++) {
        if (primeList[i] != 0) {
            result.push(primeList[i]);
        }
    }
    return result;
}

function divisorNum(n: number): number {
    let num: number = n;
    if (num < 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        let numSqrt: number = Math.floor(Math.sqrt(num));
        let primeList: number[] = makePrimeList(numSqrt);
        let divisorNum: number = 1;
        for (let i: number = 0; i < primeList.length; i++) {
            let count: number = 1;
            while (num % primeList[i] == 0) {
                num /= primeList[i];
                count++;
            }
            divisorNum *= count;
        }
        if (num != 1) {
            divisorNum *= 2;
        }
        return divisorNum;
    }
}

export function main() {
    let result: number = 1;
    while (divisorNum(trinum(result)) <= 500) {
        result++;
    }
    console.log("p012: " + result.toString());
}