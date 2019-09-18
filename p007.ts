/*
素数を小さい方から6つ並べると 2, 3, 5, 7, 11, 13 であり, 6番目の素数は 13 である.

10 001 番目の素数を求めよ.
*/
 
function isPrime(num: number): boolean {
    let yaku: number = 0;
    let rc: boolean = false;
    for (let dv: number = 0; dv < num + 1; dv++) {
        if (num % dv == 0) {
            yaku++;
        }
    }
    if (yaku == 2) {
        rc = true;
    } else {
        rc = false;
    }
    return rc;
}

function generatePrimes(n: number): number[] {
    let primes: number[] = [2];
    for (let i: number = 3; primes.length < n; i += 2) {
        if (isPrime(i) == true) {
            primes.push(i);
        }
    }
    return primes;
}

export function main() {
    let result: number[] = [1, ...generatePrimes(10001)];
    let rc = result[result.length-1];
    if (result.length > 0) {
        console.log("p007: " + result[result.length - 1].toString());
    } else {
        console.log("p007: No answer.");
    }
}