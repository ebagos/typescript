import range from "./range";

export function main(): number {
    let array: number[] = new Array(1000);
    for (let i: number = 0; i < 999; i++) {
        array[i] = i + 1;
    }
    
    return array.filter(function(n: number): boolean {
        return (n % 3) * (n % 5) == 0;
    }).reduce(function(prev, current: number): number {
        return prev+current;
    }, 0);
}

const p001 = () => {
    let array = range(1, 999);
    return array.filter(
        (n: number): boolean => (n % 3) * (n % 5) == 0
    ).reduce(
        (p: number, c: number): number => p + c);
}

const p001Another = () => {
    let setA = new Set(range(3, 999, 3));
    let setB = new Set(range(5, 999, 5));
    for (let item of setA) {
        setB.add(item);
    }
    return Array.from(setB).reduce((p,c) => p+c);
}

console.log(p001Another());

export default p001; 
