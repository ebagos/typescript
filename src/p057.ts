import { kMaxLength } from "buffer";

/*
2の平方根は無限に続く連分数で表すことができる.

√ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...

最初の4回の繰り返しを展開すると以下が得られる.

1 + 1/2 = 3/2 = 1.5
1 + 1/(2 + 1/2) = 7/5 = 1.4
1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

次の3つの項は99/70, 239/169, 577/408である. 第8項は1393/985である. これは分子の桁数が分母の桁数を超える最初の例である.

最初の1000項を考えたとき, 分子の桁数が分母の桁数を超える項はいくつあるか?
*/
const maxColumn: number = 500;
const maxTrial = 1000;

function makeArray(n: number): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < maxColumn; i++) {
        result[i] = n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}

function normalize(n: number[]): number[] {
    for (let i: number = 0; i < n.length - 1; i++) {
        n[i + 1] += Math.floor(n[i] / 10);
        n[i] %= 10;
    }
    return n;
}

function plus(a: number[], b: number[]): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < maxColumn; i++) {
        result[i] = a[i] + b[i];
    }
    result = normalize(result);
    return result;
}

function mul(a: number[], n: number): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < maxColumn; i++) {
        result[i] = a[i] * n;
    }
    result = normalize(result);
    return result;
}

function count(n: number[]): number {
    let result: number = 0;
    for (let i: number = maxColumn - 1; i >= 0; i--) {
        if (n[i] != 0) {
            break;
        }
        result++;
    }
    return maxColumn - result;
}

export function main() {
    let bunshi: number[] = makeArray(3);
    let bunbo: number[] = makeArray(2);
    let koeta: number = 0;

    for (let i: number = 0; i < maxTrial; i++) {
        let nbunbo: number[] = plus(bunshi, bunbo);
        let nbunshi: number[] = plus(mul(bunbo, 2), bunshi);
        if (count(nbunbo) < count(nbunshi)) {
            koeta++;
        }
        bunbo = nbunbo;
        bunshi = nbunshi;
    }
    console.log("p057: " + koeta.toString());
}