/*
10以下の素数の和は 2 + 3 + 5 + 7 = 17 である.

200万以下の全ての素数の和を求めよ.
*/
function makePrimeList(num: number): number[] {
    let result: number[] = [];
    if (num < 2) {
        return result;
    }
    let primeList: number[] = [];
    for (let i: number = 0; i < num + 1; i++) {
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
        let prime: number = primeList[i];
        if (prime != 0) {
            result.push(prime);
        }
    }
    return result;
}

export function main() {
    let max: number = 2000000;
    let result: number[] = makePrimeList(max);
    let sum: number = result.reduce(function(prev, current: number) {
        return prev + current;
    });
    console.log("p010: " + sum.toString());
}