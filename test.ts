export function main() {
    let pl: number[] = prime_decompo(600851475143);
    console.log("p003: " + pl.slice(-1)[0].toString());
}

function prime_decompo(n: number): number[] {
    let table: number[] = [];
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

console.log(prime_decompo(600851475143));
console.log(prime_decompo(60));
console.log(prime_decompo(894119));
