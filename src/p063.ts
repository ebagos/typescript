/*
5桁の数 16807 = 7^5 は自然数を5乗した数である. 同様に9桁の数 134217728 = 8^9 も自然数を9乗した数である.

自然数を n 乗して得られる n 桁の正整数は何個あるか?
*/
/*
10の2乗で3桁になるので、扱う自然数はひと桁の数値
*/


export function main() {
    let count: number = 0;
    for (let m: number = 1; m < 10; m++) {
        let n: number = 1;
        while (true) {
            let len: number = (m ** n).toString().length;
            if (len == n) {
                count++;
            } else {
                break;
            }
            n++;
        }
    }
    console.log("p063: " + count.toString());
}