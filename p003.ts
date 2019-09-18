/*
13195 の素因数は 5, 7, 13, 29 である.

600851475143 の素因数のうち最大のものを求めよ.
*/
export function main() {
    let pl: number[] = prime_decompo(600851475143);
    console.log("p003: " + pl.slice(-1)[0].toString());
}

function prime_decompo(n: number): number[] {
    let table: number[] = [1];
    let i: number = 2;
    while (i * i <= n) {
        while (n % i == 0) {
            n /= i;
            table.push(i);
        }
        i++;
    }
    if (n > 1) {
        table.push(n);
    }
    return table;
}

const p003 = (): number => {
    let n: number = 600851475143;
    let table: number[] = [1];
    let i: number = 2;
    while (i * i <= n) {
        while (n % i == 0) {
            n /= i;
            table.push(i);
        }
        i++;
    }
    if (n > 1) {
        table.push(n);
    }
    return table.slice(-1)[0];
}

export default p003;
