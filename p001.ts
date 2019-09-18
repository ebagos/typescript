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

export default p001; 
